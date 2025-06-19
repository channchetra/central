export default class Menu {
  static amsWebsites = [
    { name: 'AMS Education', href: 'http://education.ams.com.kh/' },
    { name: 'AMS Economy', href: 'http://economy.ams.com.kh/' },
    { name: 'AMS Infotainment', href: 'http://infotainment.ams.com.kh/' },
    {
      name: 'AMS Khmer Civilization',
      href: 'https://ams.com.kh/khmercivilization/',
    },
    { name: 'AMS Sports', href: 'https://ams.com.kh/sports/' },
  ];

  static flagshipMenus = [
    { name: 'វិទ្យុសំលេងយុវជន', href: '/voice-of-youth', class: 'bg-yellow' },
    {
      name: 'មើលទូរទស្សន៍',
      href: 'https://ams.com.kh',
      class: 'bg-dark-yellow',
    },
    {
      name: 'ស្តាប់វិទ្យុ',
      href: 'https://fm97.ams.com.kh/',
      class: 'bg-red',
    },
    {
      name: 'ជម្លោះអ៊ុយក្រែននិងរុស្សី',
      href: '/tag/ukraine-russia',
      class: 'bg-purple',
    },
  ];

  static mainMenus = [
    { name: 'ទំព័រដើម', href: '/' },
    {
      name: 'One-Minute',
      href: '/ams-one-minute',
      subMenus: [
        {
          name: 'ប្រសាសន៍ថ្នាក់ដឹកនាំ',
          href: '/ams-one-minute/one-leader-remark',
        },
        {
          name: 'Infographic',
          href: '/ams-one-minute/one-infographic',
        },
        {
          name: 'ចំណេះដឹងទូទៅ',
          href: '/ams-one-minute/one-general-knowledge',
        },
        {
          name: 'ព័ត៌មានជាតិ',
          href: '/ams-one-minute/one-national-news',
        },
        {
          name: 'ព័ត៌មានអន្តរជាតិ',
          href: '/ams-one-minute/one-international-news',
        },
      ],
    },
    {
      name: 'កិច្ចការបរទេស',
      href: '/connect-to-oversea',
      subMenus: [
        { name: 'AVI Voice', href: '/connect-to-oversea/avi-voice' },
        {
          name: 'Cambodia 2050',
          href: '/connect-to-oversea/cambodia2050',
        },
        {
          name: 'Asian Vision Dialogue (AVD)',
          href: '/connect-to-oversea/asian-vision-dialogue',
        },
        { name: 'Climate Change', href: '/connect-to-oversea/climate-change' },
        { name: 'ជីវចំម្រុះ', href: '/connect-to-oversea/biodegradable' },
      ],
    },
    {
      name: 'ព័ត៌មានទូទៅ',
      href: '/ams-news',
      subMenus: [
        { name: 'ព័ត៌មានជាតិ', href: '/ams-news/national-news' },
        { name: 'ព័ត៌មានអន្តរជាតិ', href: '/ams-news/international' },
        { name: 'កីឡា', href: '/ams-news/sports' },
        { name: 'សេដ្ឋកិច្ច', href: '/ams-news/economy' },
        { name: 'អប្សរាណេត', href: '/ams-news/apsara-net' },
        { name: 'អប្សរាផ្លាស់', href: '/ams-news/apsara-plus' },
        { name: 'Covid-19', href: '/ams-news/covid-19' },
      ],
    },
    {
      name: 'កម្ពុជាមាតុភូមិខ្ញុំ',
      href: '/ams-environment/cambodia-my-motherland',
    },
    {
      name: 'វីដេអូ',
      href: '/video',
      subMenus: [
        { name: 'AMS Muzic', href: '/video/amsmuzic' },
        { name: 'ភូមិខ្ញុំ', href: '/video/myvillage' },
        { name: 'កម្ពុជាដែនដីអឆ្ឆរយៈ', href: '/video/cambodia-heritage' },
        { name: 'វេយោអនអប្សរា', href: '/video/vayo-on-apsara' },
      ],
    },
    {
      name: 'Politico 360',
      href: '/politico360',
      subMenus: [
        {
          name: 'Chao Chaksmok',
          href: '/politico360/chao-chaksmok-politico-360',
        },
        { name: 'បក្សីចាំក្រុង', href: '/politico360/city-guard' },
        { name: 'កម្ពុជាពិត', href: '/politico360/true-cambodia' },
        { name: 'Black & White', href: '/politico360/ams-black-and-white' },
        { name: 'Positive Cambodia', href: '/politico360/positive-cambodia' },
      ],
    },
    {
      name: 'សច្ចធម៌ប្រវត្តិសាស្ត្រ',
      href: '/cambotory',
      subMenus: [
        { name: 'ក្អែកខ្មៅ', href: '/cambotory/black-crows' },
        {
          name: 'កិច្ចព្រមព្រៀងទីក្រុងប៉ារីស៍',
          href: '/cambotory/paris-peace-agreement',
        },
        { name: 'នយោបាយឈ្នះ-ឈ្នះ', href: '/cambotory/winwin' },
        { name: 'ដំណើររបស់កម្ពុជា', href: '/cambotory/cambodia-journey' },
        { name: 'ឥស្សរជនឆ្នើមកម្ពុជា', href: '/cambotory/peacefounders' },
        {
          name: '60វិនាទីនៃប្រវត្តិសាស្ត្រ',
          href: '/cambotory/60minute-of-history',
        },
        {
          name: 'ប្រវត្តិសាស្ត្រថ្នាក់ទី១២',
          href: '/cambotory/history-4hischool',
        },
        {
          name: 'ព្រឹត្តិការណ៍សំខាន់ៗ',
          href: '/cambotory/special-event',
        },
      ],
    },
  ];

  static footerCentral = [
    { name: 'ព័ត៌មានទូទៅ', href: '/ams-news' },
    { name: 'Politico 360', href: '/politico360' },
    { name: 'ក្អែកខ្មៅ', href: '/cambotory/black-crows' },
    { name: 'បរិស្ថាន', href: '/ams-environment' },
    { name: 'វីដេអូ', href: '/video' },
    { name: 'ទូរទស្សន៍', href: '/category-tv' },
  ];

  static footerLearnMore = [
    { name: 'ទំនាក់ទំនង', href: '#' },
    { name: 'សំនួរនិងចម្លើយដែលពេញនិយម', href: '#' },
    { name: 'ផ្សព្វផ្សាយពាណិជ្ជកម្ម', href: '#' },
    { name: 'ជ្រើសរើសបុគ្គលិក', href: '#' },
  ];

  static amsGroup = [
    { name: 'AMS Education', href: 'http://education.ams.com.kh/' },
    { name: 'AMS Central', href: 'https://central.ams.com.kh/' },
    { name: 'AMS Economy', href: 'ttp://economy.ams.com.kh/' },
    {
      name: 'AMS Khmer Civilization',
      href: 'https://khmercivilization.ams.com.kh/',
    },
    { name: 'AMS Infotainment', href: 'http://infotainment.ams.com.kh/' },
    { name: 'AMS Sports', href: 'https://ams.com.kh/sports/' },
  ];
}
