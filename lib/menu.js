import { getApolloClient } from 'lib/apollo-client';

import { QUERY_ALL_MENUS } from '../graphql/queries/menu';

export const MENU_LOCATION_NAVIGATION_DEFAULT = 'DEFAULT_NAVIGATION';

/**
 * mapMenuData
 */

 export function mapMenuData(menu = {}) {
  const { node } = menu;
  const data = { ...node };

  data.menuItems = data.menuItems.edges.map(({ m }) => ({ ...m }));

  return data;
}

/**
 * getAllMenus
 */

export async function getAllMenus() {
  const apolloClient = getApolloClient();
  
  const data = await apolloClient.query({
    query: QUERY_ALL_MENUS,
  });
  
  console.warn(data.menus);
  const menus = data?.data.menus.edges.map(mapMenuData);

  return {
    menus,
  };
}

/**
 * mapPagesToMenuItems
 */

export function mapPagesToMenuItems(pages) {
  return pages.map(({ id, uri, title }) => ({
      label: title,
      path: uri,
      id,
    }));
}

/**
 * createMenuFromPages
 */

export function createMenuFromPages({ locations, pages }) {
  return {
    menuItems: mapPagesToMenuItems(pages),
    locations,
  };
}

/**
 * parseHierarchicalMenu
 */
export const parseHierarchicalMenu = (
  data = [],
  { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
) => {
  const tree = [];
  const childrenOf = {};

  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    // eslint-disable-next-line no-unused-expressions
    parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem) : tree.push(newItem);
  });
  return tree;
};

/**
 * findMenuByLocation
 */

export function findMenuByLocation(menus, loc) {
  let menu;
  let location = loc;
  if (!Array.isArray(loc)) {
    location = [loc];
  }

  const searchLocations = [...location];
  do {
    menu = menus.find(({ locations }) => locations.map((l) => l.toUpperCase()).includes(searchLocations.shift()?.toUpperCase()));
  } while (!menu && location.length > 0);

  if (!menu) {
    return null;
  }

  return parseHierarchicalMenu(menu.menuItems);
}