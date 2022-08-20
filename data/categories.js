const categories = [
  // One-Minute
  {
    slug: 'ams-one-minute',
    name: 'One-Minute',
    description: 'ចំណេះដឹង និងព័ត៌មានពិត ខ្លី ខ្លឹម ត្រឹម ១នាទី។',
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/236983155_300310481866163_312516416415758812_n.jpg',
    image: null,
  },
  {
    slug: 'homeland-security',
    name: 'សន្តិសុខមាតុភូមិខ្ញុំ',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'hot-news',
    name: 'ព័ត៌មានទាន់ហេតុការណ៍',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'daily-summary',
    name: 'ព័ត៌មានសង្ខេបប្រចាំថ្ងៃ',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'new-change-in-country',
    name: 'ការផ្លាស់ប្តូរមុខមាត់ថ្មីក្នុងប្រទេស',
    description: null,
    banner: null,
    image: null,
  },
  // =======================

  // កិច្ចការបរទេសផ្សាភ្ជាប់កម្ពុជាទៅកាន់អន្តរជាតិ
  {
    slug: 'connect-to-oversea',
    name: 'កិច្ចការបរទេសផ្សាភ្ជាប់កម្ពុជាទៅកាន់អន្តរជាតិ',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'avi-voice',
    name: 'AVI VOICE',
    description:
      'កម្មវិធី AVI VOICE on AMS ជាកម្មវិធីថ្មីមួយ ដែលត្រូវបានបង្កើតឡើងក្រោមកិច្ចសហការរវាង AMS និង AVI (វិទ្យាស្ថានចក្ខុវិស័យអាស៊ី) ក្នុងគោលបំណងចែករំលែកនូវចំណេះដឹង និងការវិភាគដល់ប្រិយមិត្តអ្នកស្តាប់ ជាពិសេសយុវជន លើប្រធានបទសំខាន់ៗ ដូចជាភូមិសាស្រ្តនយោបាយនិងសេដ្ឋកិច្ចសកលនិងក្នុងតំបន់ ការអភិវឌ្ឍដោយចីរភាព សេដ្ឋកិច្ចឌីជីថល និងនវានុវត្តន៍បច្ចេកវិទ្យា ដើម្បីរួមចំណែកក្នុងការអភិវឌ្ឍនូវសមត្ថភាព និងការយល់ដឹងរបស់យុវជនកម្ពុជាជំនាន់ថ្មី ក៏ដូចជា ផ្សព្វផ្សាយឲ្យអន្តរជាតិយល់ដឹង និងស្គាល់កាន់តែច្បាស់អំពីកម្ពុជា។កម្មវិធីនេះ មានចាក់ផ្សាយ ជារៀងរាល់ថ្ងៃច័ន្ទ វេលាម៉ោង ១១:៣០-១២:០០នាទី និងចាក់ផ្សាយឡើងវិញ ជារៀងរាល់ថ្ងៃអង្គារ វេលាម៉ោង ១១:៣០-១២:០០នាទី នៅក្នុងវិទ្យុអប្សរា FM 97MHz ។សូមកុំភ្លេចតាមដានសណ្តាប់ទាំងអស់គ្នា',
    banner: 'https://asset.ams.com.kh/central/media/2021/06/AMS-Cover-AVI-Voice.jpg',
    image: 'https://asset.ams.com.kh/central/media/2021/11/AVI-Voice-on-AMS-1.jpg',
  },
  {
    slug: 'cambodia2050',
    name: 'Cambodia 2050',
    description:
      'ផ្តល់ចំនេះដឹងដល់អ្នកពាក់ព័ន្ធដើម្បីសហការចូលរួមអភិវឌ្ឍន៍ប្រទេសកម្ពុជា ក្នុងគោលដៅប្រែក្លាយទៅជាប្រទេសចំណូលមធ្យមកំរិតខ្ពស់ តាមរយៈកិច្ចពិភាក្សាសុីជំរៅ បង្កើនសមត្ថភាព ជំនាញ និងចំណេះដឹងលើគ្រប់វិស័យតាមរយៈការប្រើប្រាស់ប្រព័ន្ធបច្ចេកវិទ្យា និងតភ្ជាប់ទំនាក់ទំនងនៅឆាកអន្តរជាតិ។',
    banner: 'https://asset.ams.com.kh/central/media/2021/06/AMS-2050-Cover-3-1.jpg',
    image: 'https://asset.ams.com.kh/central/media/2021/06/Cambodia-2050-1.png',
  },
  {
    slug: 'asian-vision-dialogue',
    name: 'ASIAN VISION DIALOGUE (AVD)',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'climate-change',
    name: 'Climate Change',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'biodegradable',
    name: 'ជីវចំម្រុះ',
    description: null,
    banner: null,
    image: null,
  },
  // =======================

  // ព័ត៌មានទូទៅ
  {
    slug: 'ams-news',
    name: 'ព័ត៌មានទូទៅ',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'national-news',
    name: 'ព័ត៌មានជាតិ',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Plan-de-travail-293-copy.png',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'international',
    name: 'ព័ត៌មានអន្តរជាតិ',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Plan-de-travail-293-copy.png',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'sports',
    name: 'កីឡា',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Plan-de-travail-293-copy.png',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'economy',
    name: 'សេដ្ឋកិច្ច',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Plan-de-travail-293-copy.png',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'apsara-net',
    name: 'អប្សរាណេត',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'apsara-plus',
    name: 'អប្សរាណេត',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'election',
    name: 'ការបោះឆ្នោត',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Plan-de-travail-293-copy.png',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'covid-19',
    name: 'Covid-19',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Plan-de-travail-293-copy.png',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  // =======================

  // កម្ពុជាមាតុភូមិខ្ញុំ
  {
    slug: 'cambodia-my-motherland',
    name: 'កម្ពុជាមាតុភូមិខ្ញុំ',
    description: null,
    banner: null,
    image: null,
  },
  // =======================

  // វីដេអូ
  {
    slug: 'video',
    name: 'វីដេអូ',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'amsmuzic',
    name: 'AMS Muzic',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Plan-de-travail-293-copy.png',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'myvillage',
    name: 'ភូមិខ្ញុំ',
    description:
      'ភូមិខ្ញុំ ជាគម្រោងខ្សែវីដេអូឯកសារ ផ្តិតយក និង ឆ្លុះបញ្ចាំងពីសាច់រឿង បុគ្គល ឬ សហគមន៍ ដែលបានបង្កើតផលិតផលពាក់ព័ន្ធនឹងគំនិតច្នៃប្រឌិត ក៏ដូចជាការ បង្កើតថ្មី ដោយសេចក្តីស្រលាញ់ បូករួមជាមួយភាពជាសហគ្រិន សម្រាប់ភូមិ ស្រុកនិង សហគមន៍ របស់ខ្លួន ដោយប្រើប្រាស់នូវធនធានជុំវិញខ្លួន ទាំងចំណេះ ជំនាញ ព្រមទាំង បាន បង្កើតការងារ ដើម្បីបង្កើនចំណូលជូន ប្រជាជនក្នុងតំបន់។ ដែល គំនិត នៃការបង្កើតថ្មី ទាំងនោះ អាចជួយកាត់បន្ថយ ការប៉ះពាល់ដល់ បរិស្ថាន ជួយលើក ស្ទួយទំនៀមទំលាប់ វប្បធម៍ អរិយធម៍ និង មនុស្សធម៍ ក្នុងសង្គមជាតិជាដើម។',
    banner: 'https://asset.ams.com.kh/central/media/2021/07/myvillage-banner.png',
    image: 'https://asset.ams.com.kh/central/media/2021/07/myvillage-logo-1.png',
  },
  {
    slug: 'cambodia-heritage',
    name: 'កម្ពុជាដែនដីអឆ្ឆរយៈ',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Cambodia-Land-of-heritage-landscrape.jpg',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'vayo-on-apsara',
    name: 'វេយោអនអប្សរា',
    description: null,
    banner: null,
    image: null,
  },
  // =======================

  // Politico 360
  {
    slug: 'politico360',
    name: 'Politico 360',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'chao-chaksmok-politico-360',
    name: 'CHAO CHAKSMOK',
    description: null,
    banner:
      'https://asset.ams.com.kh/central/media/2021/08/Plan-de-travail-293-copy.png',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'city-guard',
    name: 'បក្សីចាំក្រុង',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'true-cambodia',
    name: 'កម្ពុជាពិត',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'ams-black-and-white',
    name: 'កម្មវិធី ខ្មៅនិងស',
    description:
      'គឺជាកម្មវិធីថ្មី បង្កើតឡើងក្នុងគោលបំណងបកស្រាយពន្យល់ បញ្ជាក់បន្ថែមអំពីគោលបំណង និងចក្ខុវិស័យដ៏វែងឆ្ងាយរបស់រាជរដ្ឋាភិបាលកម្ពុជា ក៏ដូចជាការឆ្លើយតបទៅនឹងការបំពុលព័ត៌មានភូតភរកុហកបោកប្រាស់របស់ក្រុមបំផ្លាញសង្គមមួយចំនួន ដែលតែងតែមានបំណងចង់បំផ្លាញសន្តិភាពនៅកម្ពុជា ក្រោមការបកស្រាយរបស់វាគ្មិនជំនាញ និងអ្នកវិភាគភូមិសាស្រ្តនយោបាយប្រកបដោយបទពិសោធន៍ត្រឹមត្រូវច្បាស់លាស់។ <br>កម្មវិធីនេះ មានផ្សាយជូន ជារៀងរាល់ថ្ងៃ ចន្ទ អង្គារ ពុធ វេលាម៉ោង ១០:៣០ នាទីព្រឹក នៅលើកញ្ចក់ទូរទស្សន៍ និងវិទ្យុអប្សរា។',
    banner:
      'https://asset.ams.com.kh/central/media/2021/09/BG_Black-and-White-wide.jpg',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  {
    slug: 'positive-cambodia',
    name: 'កម្មវិធី កម្ពុជាវិជ្ជមាន',
    description:
      'គឺជាកម្មវិធីថ្មី ដែលត្រូវបានបង្កើតឡើង ដើម្បីឆ្លុះបញ្ចាំងពីផលវិជ្ជមាន និងព័ត៌មានពិតពីបច្ចុប្បន្នភាពរបស់ប្រទេសកម្ពុជា ដើម្បីបង្ហាញជូនដល់ប្រជាជនកម្ពុជា ក្រោមការបកស្រាយរបស់វាគ្មិនជំនាញ ដែលអញ្ជើញចូលរួមពីបណ្តារស្ថាប័ន និងអង្គការនានា ដើម្បីបកស្រាយនូវបញ្ហាដែលកំពុងតែកើតឡើងនៅក្នុងប្រទេសរបស់យើង។ <br>កម្មវិធីនេះ មានផ្សាយជូន ជារៀងរាល់ថ្ងៃ ពុធ និងព្រហស្បតិ៍ វេលាម៉ោង ១០:៣០ នាទីព្រឹក នៅលើកញ្ចក់ទូរទស្សន៍ និងវិទ្យុអប្សរា។',
    banner: 'https://asset.ams.com.kh/central/media/2021/10/BG_Positive-Cambodia-Podcast-Cover-1.jpg',
    image: 'https://asset.ams.com.kh/central/media/2021/08/ams-blue.png',
  },
  // =======================

  // សច្ចធម៌ប្រវត្តិសាស្ត្រ
  {
    slug: 'cambotory',
    name: 'សច្ចធម៌ប្រវត្តិសាស្ត្រ',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'black-crows',
    name: 'ក្អែកខ្មៅ',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'paris-peace-agreement',
    name: 'កិច្ចព្រមព្រៀងទីក្រុងប៉ារីស៍',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'winwin',
    name: 'នយោបាយឈ្នះ-ឈ្នះ',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'cambodia-journey',
    name: 'ដំណើររបស់កម្ពុជា',
    description: null,
    banner: null,
    image: null,
  },
  {
    slug: 'peacefounders',
    name: 'ឥស្សរជនឆ្នើមកម្ពុជា',
    description: null,
    banner: null,
    image: null,
  },
  // =======================
];

export default categories;
