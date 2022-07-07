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
    { name: 'វិទ្យុសំលេងយុវជន', href: '/voice-of-youth' },
    { name: 'មើលទូរទស្សន៍', href: 'https://ams.com.kh' },
    { name: 'ស្តាប់វិទ្យុ', href: 'https://fm97.ams.com.kh/' },
    { name: 'ជម្លោះអ៊ុយក្រែននិងរុស្សី', href: '/tag/ukraine-russia' },
  ];

  static mainMenus = [
    { name: 'ទំព័រដើម', href: '/' },
    {
      name: 'One-Minute',
      href: '/ams-one-minute',
      subMenus: [
        {
          name: 'សន្តិសុខមាតុភូមិខ្ញុំ',
          href: '/ams-one-minute/homeland-security',
        },
        { name: 'ព័ត៌មានទាន់ហេតុការណ៍', href: '/ams-one-minute/hot-news' },
        {
          name: 'ព័ត៌មានសង្ខេបប្រចាំថ្ងៃ',
          href: '/ams-one-minute/daily-summary',
        },
        {
          name: 'ការផ្លាស់ប្តរមុខមាត់ថ្មីក្នុងប្រទេស',
          href: '/ams-one-minute/new-change-in-country',
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
        { name: 'ការបោះឆ្នោត', href: '/ams-news/election' },
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
    { name: 'AMS Central', href: 'https://ams.com.kh/central/' },
    { name: 'AMS Economy', href: 'ttp://economy.ams.com.kh/' },
    {
      name: 'AMS Khmer Civilization',
      href: 'https://ams.com.kh/khmercivilization/',
    },
    { name: 'AMS Infotainment', href: 'http://infotainment.ams.com.kh/' },
    { name: 'AMS Sports', href: 'https://ams.com.kh/sports/' },
  ];
}
