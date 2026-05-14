// lib/projects-data.ts
export type ExperienceItem = {
  id: string;
  title: string;

  href: string;
  cover?: string | string[];
  stack: string[];
  overview?: string[];

  links?: { label: string; href: string }[];
  contentHtml?: string;

  githubRepo?: string;
  githubRepoFront?: string;
  githubRepoBack?: string;
  youtube?: string;

  clientName?: string;
  clientAvatar?: string;
  liveUrl?: string;
};

export type Locale = "vi" | "en";

export const experienceItems: Record<Locale, ExperienceItem[]> = {
  vi: [
    // dai partners corporate
    {
      id: "daipartners-corporate",
      title: "Website công ty luật DAI & PARTNERS (CORPORATE)",

      href: "/projects/daipartners-corporate",
      cover: [
        "/projects/project-daipartners-corporate-001.png",
        "/projects/project-daipartners-corporate-002.png",
        "/projects/project-daipartners-corporate-003.png",
        "/projects/project-daipartners-corporate-004.png",
        "/projects/project-daipartners-corporate-005.png",
        "/projects/project-daipartners-corporate-006.png",
        "/projects/project-daipartners-corporate-007.png",
        "/projects/project-daipartners-corporate-008.png",
      ],
      stack: ["React Native", "Spring Boot", "MongoDB"],
      githubRepo: "https://github.com/vuutruongnhatthanhhh/expense-tracker",

      youtube: "https://www.youtube.com/watch?v=Is0nafHDwHc",
      clientName: "DAI & PARTNERS",
      clientAvatar: "/clients/client-daipartners.png",
      liveUrl: "https://corporate.daipartners.com.vn",

      contentHtml: `
 

  


 <ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Trang giới thiệu trình bày tổng quan về công ty luật, đội ngũ luật sư và kinh nghiệm hoạt động trong nhiều lĩnh vực pháp lý.</li>
 <li>Trang dịch vụ cung cấp thông tin chi tiết về các lĩnh vực tư vấn như doanh nghiệp, hợp đồng, đất đai, hôn nhân gia đình và giải quyết tranh chấp.</li>
 <li>Trang tin tức cập nhật các bài viết pháp lý, phân tích chuyên sâu và những thay đổi mới nhất trong quy định pháp luật.</li>
 <li>Trang liên hệ cho phép khách hàng gửi yêu cầu tư vấn, đặt lịch làm việc và kết nối trực tiếp với đội ngũ luật sư.</li>
</ul>
  
`,
    },
    // dai partners
    {
      id: "daipartners",
      title: "Website công ty luật DAI & PARTNERS",

      href: "/projects/daipartners",
      cover: [
        "/projects/project-daipartners-001.png",
        "/projects/project-daipartners-002.png",
        "/projects/project-daipartners-003.png",
        "/projects/project-daipartners-004.png",
        "/projects/project-daipartners-005.png",
        "/projects/project-daipartners-006.png",
        "/projects/project-daipartners-007.png",
        "/projects/project-daipartners-008.png",
        "/projects/project-daipartners-009.png",
      ],
      stack: [
        "Reactjs",
        "Nodejs",
        "MySQL",
        "Redux",
        "Tailwind CSS",
        "Express.js",
        "Prisma",
        "Cloudinary",
        "Docker",
        "JWT",
        "Sentry",
      ],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/ecommerce-reactjs",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/ecommerce-nodejs",
      youtube: "https://www.youtube.com/watch?v=080oQLMAtt0&t=233s",
      clientName: "DAI & PARTNERS",
      clientAvatar: "/clients/client-daipartners.png",
      liveUrl: "https://daipartners.com.vn",

      contentHtml: `
  

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Trang giới thiệu cung cấp thông tin về lịch sử hình thành, sứ mệnh và đội ngũ luật sư giàu kinh nghiệm của công ty.</li>
  <li>Trang dịch vụ trình bày các giải pháp pháp lý chuyên sâu trong các lĩnh vực như tư vấn doanh nghiệp, đầu tư, lao động và tố tụng.</li>
  <li>Trang tin tức chia sẻ kiến thức pháp luật hữu ích, các bài viết tư vấn và những cập nhật quan trọng về chính sách pháp lý.</li>
  <li>Trang liên hệ hỗ trợ khách hàng gửi câu hỏi, đăng ký tư vấn trực tuyến và nhận phản hồi nhanh chóng từ đội ngũ chuyên gia.</li>
</ul>





`,
    },

    // bighead

    {
      id: "bighead",
      title: "Website bán phụ kiện mô tô BigHead",

      href: "/projects/bighead",
      cover: [
        "/projects/project-bighead-001.png",
        "/projects/project-bighead-002.png",
        "/projects/project-bighead-003.png",
        "/projects/project-bighead-004.png",
        "/projects/project-bighead-005.png",
        "/projects/project-bighead-006.png",
        "/projects/project-bighead-007.png",
      ],
      stack: [
        "Next.js",
        "NestJs",
        "PostgreSQL",
        "Zustand",
        "Material UI",
        "TypeORM",
        "AWS",
        "Docker",
        "NextAuth.js",
        "Passport.js",
        "GitLab",
        "Grafana",
      ],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://gitlab.com/vuutruongnhatthanh-group/flashcard-nextjs",
      githubRepoBack:
        "https://gitlab.com/vuutruongnhatthanh-group/flashcard-nestjs",
      youtube: "https://www.youtube.com/watch?v=O62NVVQbYmE",
      clientName: "BigHead",
      clientAvatar: "/clients/client-bighead.png",
      liveUrl: "https://bighead-eight.vercel.app/",

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   1. Công nghệ sử dụng
  </h2>

  

<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
 1.1. Front end
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
<li>Xây dựng frontend với <strong>Next.js</strong> và <strong>MUI (Material UI)</strong> để tạo giao diện hiện đại. </li>
<li>Tích hợp <strong>Zustand</strong> để quản lý trạng thái ứng dụng gồm thông tin phiên đăng nhập, chế độ sáng/tối và thẻ ghi nhớ học gần nhất.</li>

<li>Triển khai xác thực người dùng với <strong>NextAuth</strong>, hỗ trợ đăng nhập qua tài khoản Google và GitHub.</li>
 
</ul>

 


<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
 1.2. Back end
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
<li>Phát triển backend bằng <strong>NestJS</strong>, đảm bảo kiến trúc rõ ràng, dễ mở rộng và bảo trì theo mô hình module hóa.</li>
<li>Sử dụng <strong>TypeORM</strong> để thao tác dữ liệu, kết nối cơ sở dữ liệu <strong>PostgreSQL</strong> được triển khai trong môi trường <strong>Docker</strong>.</li>
<li>Triển khai xác thực và phân quyền người dùng bằng <strong>Passport.js</strong>, hỗ trợ các strategy linh hoạt.</li>
<li>Tích hợp <strong>AWS S3</strong> và <strong>CloudFront</strong> để lưu trữ và phân phối tài nguyên tĩnh; sử dụng <strong>RDS</strong> cho cơ sở dữ liệu được quản lý, <strong>Lambda</strong> cho serverless functions, <strong>SES</strong> để gửi email và <strong>EventBridge</strong> để lên lịch và điều phối sự kiện.</li>
<li>Self-host hạ tầng và thiết lập pipeline <strong>CI/CD</strong> với <strong>GitLab</strong>, tự động hóa quá trình build, test và deploy.</li>
<li>Thiết lập hệ thống <strong>Logging</strong> và <strong>Monitoring</strong> với <strong>Grafana Stack</strong>, theo dõi và phân tích hiệu năng hệ thống trong thời gian thực.</li>

</ul>

  <figure class="my-6">
    <img src="/projects/project-flashcard-012.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
      Lưu trữ hình ảnh flashcard trên AWS S3
    </figcaption>
  </figure>

   <figure class="my-6">
    <img src="/projects/project-flashcard-013.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Phân phối hình ảnh qua AWS CloudFront
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/projects/project-flashcard-014.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Hosting PostgreSQL với AWS RDS
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/projects/project-flashcard-015.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Sử dụng AWS Lambda để tính toán các thẻ flashcard cần ôn lại
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/projects/project-flashcard-016.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Sử dụng AWS SES để gửi email nhắc nhở các thẻ flashcard cần ôn lại
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/projects/project-flashcard-017.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Lập lịch nhắc nhở ôn tập flashcard với AWS EventBridge
    </figcaption>
  </figure>

      <figure class="my-6">
    <img src="/projects/project-flashcard-018.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Self-host hạ tầng và thiết lập pipeline CI/CD với GitLab
    </figcaption>
  </figure>

      <figure class="my-6">
    <img src="/projects/project-flashcard-019.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Monitoring (Prometheus + Grafana + Node Exporter)
    </figcaption>
  </figure>

       <figure class="my-6">
    <img src="/projects/project-flashcard-020.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Logging (Loki + Promtail)
    </figcaption>
  </figure>



  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
  2. Demo sản phẩm
  </h2>

  <p class="text-[18px]">Xem demo trực tiếp qua youtube tại <a class="text-blue-600 underline" href="https://www.youtube.com/watch?v=O62NVVQbYmE" target="_black">đây</a<</p>
   
`,
    },

    // public blockchain app
    {
      id: "public-blockchain",
      title: "Public blockchain cho website bản quyền sách",

      href: "/projects/public-blockchain",
      cover: [
        "/projects/project-public-blockchain-001.png",
        "/projects/project-public-blockchain-002.png",
        "/projects/project-public-blockchain-003.png",
        "/projects/project-public-blockchain-004.png",
      ],
      stack: [
        "Next.js",
        "Solidity",
        "Web3.js",
        "Ethereum network",
        "Ganache",
        "Truffle",
        "MetaMask",
        "Sepolia testnet",
      ],
      githubRepo:
        "https://github.com/vuutruongnhatthanhhh/SC_public_blockchain_solidity",
      // githubRepoFront:
      //   "https://github.com/vuutruongnhatthanhhh/ecommerce-reactjs",
      // githubRepoBack:
      //   "https://github.com/vuutruongnhatthanhhh/ecommerce-nodejs",
      youtube: "https://www.youtube.com/watch?v=iKCZgjaPt_U",
      clientName: "Khách hàng E",
      clientAvatar: "/clients/client-e.png",

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   1. Công nghệ sử dụng
  </h2>

  


  <ul class="list-disc pl-6 space-y-2 text-lg mt-4 text-slate-800 dark:text-slate-300">
<li>Xây dựng frontend với <strong>Next.js</strong>, tận dụng Server-Side Rendering (SSR) và Static Site Generation (SSG) để tối ưu hiệu năng và SEO cho nền tảng quản lý bản quyền sách.</li>
<li>Phát triển smart contract bằng <strong>Solidity</strong> triển khai trên mạng <strong>Ethereum</strong> (Sepolia Testnet), đảm bảo tính minh bạch, bất biến và tự động hóa trong việc đăng ký, xác thực và chuyển nhượng bản quyền tác phẩm.</li>

<li>Tích hợp <strong>Web3.js</strong> kết hợp <strong>MetaMask</strong> để kết nối ví người dùng với blockchain <strong>Ethereum</strong>, xử lý xác thực danh tính phi tập trung và thực hiện các giao dịch on-chain như mint token bản quyền, kiểm tra quyền sở hữu trên <strong>Sepolia Testnet</strong> một cách liền mạch và bảo mật.</li>

</ul>

  <figure class="my-6">
    <img src="/projects/project-public-blockchain-005.png"
         alt=""
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Xử lý xác thực danh tính phi tập trung và thực hiện các giao dịch on-chain
    </figcaption>
  </figure>

   




  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
  2. Ứng dụng
  </h2>

  <p class="text-[18px]"></p>
   <ul class="list-disc pl-6 space-y-2 text-lg mt-4 text-slate-800 dark:text-slate-300">
<li>Dự án từng được bản thân sử dụng để dạy học online, xem chi tiết tại <a class="text-blue-600 underline" href="https://drive.google.com/drive/folders/1ae65FO7WClgyoKdt14JFuAKKtioy5ON8?usp=sharing" target="_black">đây</a></li>
<li>Xem demo dự án tại <a class="text-blue-600 underline" href="https://www.youtube.com/watch?v=iKCZgjaPt_U" target="_black">đây</a></li>


</ul>
`,
    },

    // room booking app
    {
      id: "room-booking",
      title: "Website đặt lịch phòng họp",

      href: "/projects/room-booking",
      cover: [
        "/projects/meeting_001.png",
        "/projects/meeting_002.png",
        "/projects/meeting_003.png",
        "/projects/meeting_004.png",
        "/projects/meeting_005.png",
        "/projects/meeting_006.png",
      ],
      stack: ["Angular", "Asp.Net Core", "SQL Server"],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-fe",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-api",
      youtube: "https://www.youtube.com/watch?v=d6vigsSpwDo",
      clientName: "Khách hàng B",
      clientAvatar: "/clients/client-b.png",

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   1. Công nghệ sử dụng
  </h2>

  


  <ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
<li>Xây dựng frontend với <strong>Angular</strong> để tạo giao diện hiện đại, hiệu năng cao và dễ bảo trì.</li>
<li>Xây dựng RESTful API với <strong>ASP.NET Core Web API</strong>, kết hợp <strong>Entity Framework Core</strong> và <strong>SQL Server</strong> để quản lý dữ liệu phòng họp, người dùng và lịch đặt phòng.</li>
</ul>

  <figure class="my-6">
    <img src="/projects/meeting_007.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Sử dụng SQL Server Management Studio (SSMS) để quản lý và theo dõi cơ sở dữ liệu SQL Server.
    </figcaption>
  </figure>

  
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
  2. Demo sản phẩm
  </h2>

  <p class="text-[18px]">Xem demo trực tiếp qua youtube tại <a class="text-blue-600 underline" href="https://www.youtube.com/watch?v=d6vigsSpwDo" target="_black">đây</a<</p>
   
`,
    },
  ],
  en: [
    // dai partners corporate
    {
      id: "daipartners-corporate",
      title: "Dai & Partners Law Firm Website (CORPORATE)",

      href: "/projects/daipartners-corporate",
      cover: [
        "/projects/project-daipartners-corporate-001.png",
        "/projects/project-daipartners-corporate-002.png",
        "/projects/project-daipartners-corporate-003.png",
        "/projects/project-daipartners-corporate-004.png",
        "/projects/project-daipartners-corporate-005.png",
        "/projects/project-daipartners-corporate-006.png",
        "/projects/project-daipartners-corporate-007.png",
        "/projects/project-daipartners-corporate-008.png",
      ],
      stack: ["React Native", "Spring Boot", "MongoDB"],
      githubRepo: "https://github.com/vuutruongnhatthanhhh/expense-tracker",

      youtube: "https://www.youtube.com/watch?v=Is0nafHDwHc",
      clientName: "DAI & PARTNERS",
      clientAvatar: "/clients/client-daipartners.png",
      liveUrl: "https://corporate.daipartners.com.vn",

      contentHtml: `
 

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>The About page provides an overview of the law firm, its team of attorneys, and their experience across various legal fields.</li>
  <li>The Services page offers detailed information about practice areas such as corporate law, contracts, real estate, family law, and dispute resolution.</li>
  <li>The News page features legal articles, in-depth analysis, and the latest updates on laws and regulations.</li>
  <li>The Contact page allows clients to submit consultation requests, schedule appointments, and connect directly with the legal team.</li>
</ul>
  
`,
    },
    // dai partners
    {
      id: "daipartners",
      title: "DAI & PARTNERS Law Firm Website",

      href: "/projects/daipartners",
      cover: [
        "/projects/project-daipartners-001.png",
        "/projects/project-daipartners-002.png",
        "/projects/project-daipartners-003.png",
        "/projects/project-daipartners-004.png",
        "/projects/project-daipartners-005.png",
        "/projects/project-daipartners-006.png",
        "/projects/project-daipartners-007.png",
        "/projects/project-daipartners-008.png",
        "/projects/project-daipartners-009.png",
      ],
      stack: [
        "Reactjs",
        "Nodejs",
        "MySQL",
        "Redux",
        "Tailwind CSS",
        "Express.js",
        "Prisma",
        "Cloudinary",
        "Docker",
        "JWT",
        "Sentry",
      ],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/ecommerce-reactjs",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/ecommerce-nodejs",
      youtube: "https://www.youtube.com/watch?v=080oQLMAtt0&t=233s",
      clientName: "DAI & PARTNERS",
      clientAvatar: "/clients/client-daipartners.png",
      liveUrl: "https://daipartners.com.vn",

      contentHtml: `
  

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>The About page provides information about the firm's history, mission, and team of experienced attorneys.</li>
  <li>The Services page outlines specialized legal solutions in areas such as corporate advisory, investment, labor law, and litigation.</li>
  <li>The News page shares useful legal insights, advisory articles, and important updates on legal policies and regulations.</li>
  <li>The Contact page allows clients to submit inquiries, register for online consultations, and receive prompt responses from our legal experts.</li>
</ul>





`,
    },
    {
      id: "flashcard",
      title: "English Vocabulary Learning Website with Flashcards",

      href: "/projects/flashcard",
      cover: [
        "/projects/project-flashcard-002.png",
        "/projects/project-flashcard-001.png",
        "/projects/project-flashcard-003.png",
        "/projects/project-flashcard-004.png",
        "/projects/project-flashcard-005.png",
        "/projects/project-flashcard-006.png",
        "/projects/project-flashcard-007.png",
        "/projects/project-flashcard-008.png",
        "/projects/project-flashcard-009.png",
        "/projects/project-flashcard-010.png",
        "/projects/project-flashcard-011.png",
      ],
      stack: [
        "Next.js",
        "NestJs",
        "PostgreSQL",
        "Zustand",
        "Material UI",
        "TypeORM",
        "AWS",
        "Docker",
        "NextAuth.js",
        "Passport.js",
        "GitLab",
        "Grafana",
      ],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://gitlab.com/vuutruongnhatthanh-group/flashcard-nextjs",
      githubRepoBack:
        "https://gitlab.com/vuutruongnhatthanh-group/flashcard-nestjs",
      youtube: "https://www.youtube.com/watch?v=O62NVVQbYmE",
      clientName: "Khách hàng C",
      clientAvatar: "/clients/client-c.png",

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   1. Technologies Used
  </h2>

  

<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
 1.1. Front end
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
<li>Build the frontend with <strong>Next.js</strong> and <strong>MUI (Material UI)</strong> to create a modern interface. </li>
<li>Integrate <strong>Zustand</strong> for managing application state including login information, light/dark mode, and recently learned flashcards.</li>

<li>Implement user authentication with <strong>NextAuth</strong>, supporting login via Google and GitHub accounts.</li>
 
</ul>

 


<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
 1.2. Back end
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
<li>Develop the backend with <strong>NestJS</strong>, ensuring a clear architecture, easy scalability, and maintainability following a module-based approach.</li>
<li>Use <strong>TypeORM</strong> for data manipulation, connecting to the <strong>PostgreSQL</strong> database deployed in a <strong>Docker</strong> environment.</li>
<li>Implement user authentication and authorization with <strong>Passport.js</strong>, supporting flexible authentication strategies.</li>
<li>Integrate <strong>AWS S3</strong> and <strong>CloudFront</strong> for storing and distributing static resources; use <strong>RDS</strong> for managed database services, <strong>Lambda</strong> for serverless functions, <strong>SES</strong> for email sending, and <strong>EventBridge</strong> for scheduling and event orchestration.</li>
<li>Self-host the infrastructure and set up a <strong>CI/CD</strong> pipeline with <strong>GitLab</strong>, automating the build, test, and deployment processes.</li>
<li>Set up <strong>Logging</strong> and <strong>Monitoring</strong> systems with the <strong>Grafana Stack</strong>, enabling real-time performance tracking and analysis.</li>

</ul>

  <figure class="my-6">
    <img src="/projects/project-flashcard-012.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
      Storing flashcard images on AWS S3
    </figcaption>
  </figure>

   <figure class="my-6">
    <img src="/projects/project-flashcard-013.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Distributing images via AWS CloudFront
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/projects/project-flashcard-014.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Hosting PostgreSQL with AWS RDS
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/projects/project-flashcard-015.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Using AWS Lambda to calculate flashcards that need to be reviewed
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/projects/project-flashcard-016.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Using AWS SES to send reminder emails for flashcards that need to be reviewed
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/projects/project-flashcard-017.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Scheduling review reminders for flashcards with AWS EventBridge
    </figcaption>
  </figure>

      <figure class="my-6">
    <img src="/projects/project-flashcard-018.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Self-host the infrastructure and set up pipeline CI/CD with GitLab
    </figcaption>
  </figure>

      <figure class="my-6">
    <img src="/projects/project-flashcard-019.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Monitoring (Prometheus + Grafana + Node Exporter)
    </figcaption>
  </figure>

       <figure class="my-6">
    <img src="/projects/project-flashcard-020.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Logging (Loki + Promtail)
    </figcaption>
  </figure>



  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
  2. Product Demo
  </h2>

  <p class="text-[18px]">Watch the live demo on YouTube at <a class="text-blue-600 underline" href="https://www.youtube.com/watch?v=O62NVVQbYmE" target="_black">here</a<</p>
   
`,
    },
    {
      id: "public-blockchain",
      title: "Public Blockchain for Book Copyright Registration Website",

      href: "/projects/public-blockchain",
      cover: [
        "/projects/project-public-blockchain-001.png",
        "/projects/project-public-blockchain-002.png",
        "/projects/project-public-blockchain-003.png",
        "/projects/project-public-blockchain-004.png",
      ],
      stack: [
        "Next.js",
        "Solidity",
        "Web3.js",
        "Ethereum network",
        "Ganache",
        "Truffle",
        "MetaMask",
        "Sepolia testnet",
      ],
      githubRepo:
        "https://github.com/vuutruongnhatthanhhh/SC_public_blockchain_solidity",
      // githubRepoFront:
      //   "https://github.com/vuutruongnhatthanhhh/ecommerce-reactjs",
      // githubRepoBack:
      //   "https://github.com/vuutruongnhatthanhhh/ecommerce-nodejs",
      youtube: "https://www.youtube.com/watch?v=iKCZgjaPt_U",
      clientName: "Khách hàng E",
      clientAvatar: "/clients/client-e.png",

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   1. Technologies Used
  </h2>

  


  <ul class="list-disc pl-6 space-y-2 text-lg mt-4 text-slate-800 dark:text-slate-300">
<li>Built the frontend using <strong>Next.js</strong>, leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) to optimize performance and SEO for a book copyright management platform.</li>
<li>Developed smart contracts in <strong>Solidity</strong> deployed on the <strong>Ethereum</strong> (Sepolia Testnet) network, ensuring transparency, immutability, and automation in the registration, verification, and transfer of intellectual property rights.</li>

<li>Integrated <strong>Web3.js</strong> with <strong>MetaMask</strong> to connect user wallets to the <strong>Ethereum</strong> blockchain, enabling decentralized authentication and handling on-chain transactions such as minting copyright tokens and verifying ownership on <strong>Sepolia Testnet</strong> seamlessly and securely.</li>

</ul>

  <figure class="my-6">
    <img src="/projects/project-public-blockchain-005.png"
         alt=""
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
    Handling decentralized identity verification and executing on-chain transactions
    </figcaption>
  </figure>

   




  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
  2. Application
  </h2>

  <p class="text-[18px]"></p>
   <ul class="list-disc pl-6 space-y-2 text-lg mt-4 text-slate-800 dark:text-slate-300">
<li>The project has been used by the author for online teaching, see details at <a class="text-blue-600 underline" href="https://drive.google.com/drive/folders/1ae65FO7WClgyoKdt14JFuAKKtioy5ON8?usp=sharing" target="_black">here</a></li>
<li>Watch the project demo at <a class="text-blue-600 underline" href="https://www.youtube.com/watch?v=iKCZgjaPt_U" target="_black">here</a></li>


</ul>
`,
    },

    {
      id: "room-booking",
      title: "Meeting Room Booking Website",

      href: "/projects/room-booking",
      cover: [
        "/projects/meeting_001.png",
        "/projects/meeting_002.png",
        "/projects/meeting_003.png",
        "/projects/meeting_004.png",
        "/projects/meeting_005.png",
        "/projects/meeting_006.png",
      ],
      stack: ["Angular", "Asp.Net Core", "SQL Server"],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-fe",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-api",
      youtube: "https://www.youtube.com/watch?v=d6vigsSpwDo",
      clientName: "Khách hàng B",
      clientAvatar: "/clients/client-b.png",

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   1. Technologies Used
  </h2>

  


  <ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
<li>Built the frontend with <strong>Angular</strong> to create a modern, high-performance, and maintainable user interface.</li>
<li>Developed RESTful APIs with <strong>ASP.NET Core Web API</strong>, integrated with <strong>Entity Framework Core</strong> and <strong>SQL Server</strong> to manage data for meeting rooms, users, and booking schedules.</li>
</ul>

  <figure class="my-6">
    <img src="/projects/meeting_007.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Using SQL Server Management Studio (SSMS) to manage and monitor the SQL Server database.
    </figcaption>
  </figure>

  
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
  2. Application
  </h2>

  <p class="text-[18px]">View the demo directly on YouTube at <a class="text-blue-600 underline" href="https://www.youtube.com/watch?v=d6vigsSpwDo" target="_black">this link</a></p>
   
`,
    },
  ],
};

export const getExperienceById = (id: string, locale: Locale = "vi") =>
  experienceItems[locale].find((x) => x.id === id);
