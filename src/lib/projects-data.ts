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
 

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Trang giới thiệu cung cấp thông tin về cửa hàng, sứ mệnh phát triển và cam kết mang đến các phụ kiện mô tô chất lượng cao.</li>
  <li>Trang sản phẩm trưng bày đa dạng các phụ kiện như mũ bảo hiểm, găng tay, đèn trợ sáng, thùng xe và đồ bảo hộ chính hãng.</li>
  <li>Trang tin tức chia sẻ kinh nghiệm sử dụng, đánh giá sản phẩm và những kiến thức hữu ích dành cho người yêu xe mô tô.</li>
  <li>Trang liên hệ hỗ trợ khách hàng gửi yêu cầu tư vấn, kiểm tra tình trạng đơn hàng và kết nối nhanh chóng với đội ngũ chăm sóc khách hàng.</li>
</ul>

 


 
   
`,
    },

    // katp
    {
      id: "katp",
      title: "Website salon tóc KATP",

      href: "/projects/katp",
      cover: [
        "/projects/project-katp-001.png",
        "/projects/project-katp-002.png",
        "/projects/project-katp-003.png",
        "/projects/project-katp-004.png",
        "/projects/project-katp-005.png",
        "/projects/project-katp-006.png",
        "/projects/project-katp-007.png",
        "/projects/project-katp-008.png",
        "/projects/project-katp-009.png",
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
      clientName: "KATP",
      clientAvatar: "/clients/client-katp.png",
      liveUrl: "https://katp.vercel.app/",

      contentHtml: `
  

  


  <ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Trang giới thiệu chia sẻ câu chuyện thương hiệu, đội ngũ stylist chuyên nghiệp và không gian làm đẹp hiện đại của salon.</li>
  <li>Trang dịch vụ cung cấp thông tin chi tiết về các dịch vụ như cắt tóc, uốn, nhuộm, phục hồi và chăm sóc tóc chuyên sâu.</li>
  <li>Trang bộ sưu tập trưng bày các mẫu tóc nổi bật, xu hướng mới nhất và những hình ảnh thực tế từ khách hàng.</li>
  <li>Trang liên hệ giúp khách hàng đặt lịch hẹn nhanh chóng, nhận tư vấn và kết nối trực tiếp với salon.</li>
</ul>

 

   




  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
`,
    },

    // tenjin
    {
      id: "tenjin",
      title: "Website marketing bất động sản Tenjin",

      href: "/projects/tenjin",
      cover: [
        "/projects/project-tenjin-001.png",
        "/projects/project-tenjin-002.png",
        "/projects/project-tenjin-003.png",
        "/projects/project-tenjin-004.png",
        "/projects/project-tenjin-005.png",
        "/projects/project-tenjin-006.png",
        "/projects/project-tenjin-007.png",
        "/projects/project-tenjin-008.png",
      ],
      stack: ["Angular", "Asp.Net Core", "SQL Server"],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-fe",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-api",
      youtube: "https://www.youtube.com/watch?v=d6vigsSpwDo",
      clientName: "Tenjin",
      clientAvatar: "/clients/client-tenjin.webp",
      liveUrl: "https://tenjin-agency.vercel.app/",

      contentHtml: `
  

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Trang giới thiệu cung cấp thông tin về công ty, tầm nhìn phát triển và đội ngũ chuyên viên giàu kinh nghiệm trong lĩnh vực bất động sản.</li>
  <li>Trang dự án giới thiệu các căn hộ, nhà phố, đất nền và dự án nổi bật với đầy đủ hình ảnh, tiện ích và thông tin chi tiết.</li>
  <li>Trang tin tức cập nhật xu hướng thị trường, kiến thức đầu tư và những phân tích chuyên sâu về bất động sản.</li>
  <li>Trang liên hệ hỗ trợ khách hàng đăng ký nhận tư vấn, đặt lịch tham quan và kết nối nhanh chóng với đội ngũ kinh doanh.</li>
</ul>

 

  
 
`,
    },

    // thuong-nail
    {
      id: "thuong-nail",
      title: "Website salon nail Thương Nail",

      href: "/projects/thuong-nail",
      cover: [
        "/projects/project-thuong-nail-001.png",
        "/projects/project-thuong-nail-002.png",
        "/projects/project-thuong-nail-003.png",
        "/projects/project-thuong-nail-004.png",
        "/projects/project-thuong-nail-005.png",
        "/projects/project-thuong-nail-006.png",
      ],
      stack: ["Angular", "Asp.Net Core", "SQL Server"],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-fe",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-api",
      youtube: "https://www.youtube.com/watch?v=d6vigsSpwDo",
      clientName: "Thương Nail",
      clientAvatar: "/clients/client-thuong-nail.png",
      liveUrl: "https://thuong-nail.vercel.app/",

      contentHtml: `
  

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Trang giới thiệu chia sẻ câu chuyện thương hiệu, đội ngũ kỹ thuật viên chuyên nghiệp và không gian làm đẹp sang trọng của tiệm nail.</li>
  <li>Trang dịch vụ cung cấp thông tin chi tiết về các dịch vụ như sơn gel, đắp bột, nối móng, vẽ nail nghệ thuật và chăm sóc tay chân.</li>
  <li>Trang bộ sưu tập trưng bày những mẫu nail nổi bật, xu hướng mới nhất và hình ảnh thực tế từ khách hàng.</li>
  <li>Trang liên hệ giúp khách hàng đặt lịch hẹn nhanh chóng, nhận tư vấn và kết nối trực tiếp với đội ngũ kỹ thuật viên.</li>
</ul>

 

  
 
`,
    },

    // xua-cu-coffee
    {
      id: "xua-cu-coffee",
      title: "Website quán cà phê Xưa Cũ Coffee",

      href: "/projects/xua-cu-coffee",
      cover: [
        "/projects/project-xua-cu-coffee-001.png",
        "/projects/project-xua-cu-coffee-002.png",
        "/projects/project-xua-cu-coffee-003.png",
        "/projects/project-xua-cu-coffee-004.png",
        "/projects/project-xua-cu-coffee-005.png",
        "/projects/project-xua-cu-coffee-006.png",
        "/projects/project-xua-cu-coffee-007.png",
        "/projects/project-xua-cu-coffee-008.png",
      ],
      stack: ["Angular", "Asp.Net Core", "SQL Server"],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-fe",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-api",
      youtube: "https://www.youtube.com/watch?v=d6vigsSpwDo",
      clientName: "Xưa Cũ Coffee",
      clientAvatar: "/clients/client-xua-cu-coffee.png",
      liveUrl: "https://xua-cu-coffee.vercel.app/",

      contentHtml: `
  

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Trang giới thiệu chia sẻ câu chuyện thương hiệu, nguồn nguyên liệu chất lượng và không gian thưởng thức hiện đại của cửa hàng.</li>
  <li>Trang thực đơn giới thiệu đa dạng các loại cà phê, trà sữa, trà trái cây và các món ăn kèm hấp dẫn.</li>
  <li>Trang tin tức cập nhật các chương trình khuyến mãi, sản phẩm mới và những bài viết thú vị về văn hóa cà phê.</li>
  <li>Trang liên hệ giúp khách hàng đặt hàng, gửi phản hồi và kết nối nhanh chóng với đội ngũ chăm sóc khách hàng.</li>
</ul>

 

  
 
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
    // bighead
    {
      id: "bighead",
      title: "BigHead Motorcycle Parts Website",

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
 

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>The About page introduces the store, its mission, and commitment to providing high-quality motorcycle accessories.</li>
  <li>The Products page showcases a wide range of items, including helmets, gloves, auxiliary lights, top boxes, and protective gear.</li>
  <li>The News page shares product reviews, riding tips, and useful articles for motorcycle enthusiasts.</li>
  <li>The Contact page allows customers to submit inquiries, check order status, and connect quickly with the support team.</li>
</ul>

 


 
   
`,
    },
    // katp
    {
      id: "katp",
      title: "KATP Hair Salon Website",

      href: "/projects/katp",
      cover: [
        "/projects/project-katp-001.png",
        "/projects/project-katp-002.png",
        "/projects/project-katp-003.png",
        "/projects/project-katp-004.png",
        "/projects/project-katp-005.png",
        "/projects/project-katp-006.png",
        "/projects/project-katp-007.png",
        "/projects/project-katp-008.png",
        "/projects/project-katp-009.png",
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
      clientName: "KATP",
      clientAvatar: "/clients/client-katp.png",
      liveUrl: "https://katp.vercel.app/",

      contentHtml: `
  

  


 <ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>The About page shares the brand story, introduces the professional styling team, and highlights the salon’s modern beauty space.</li>
  <li>The Services page provides detailed information about haircuts, perms, coloring, restoration treatments, and intensive hair care services.</li>
  <li>The Gallery page showcases featured hairstyles, the latest trends, and real photos from clients.</li>
  <li>The Contact page allows customers to book appointments quickly, receive consultations, and connect directly with the salon.</li>
</ul>

 

   




  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
`,
    },
    // tenjin
    {
      id: "tenjin",
      title: "Tenjin Real Estate Marketing Website",

      href: "/projects/tenjin",
      cover: [
        "/projects/project-tenjin-001.png",
        "/projects/project-tenjin-002.png",
        "/projects/project-tenjin-003.png",
        "/projects/project-tenjin-004.png",
        "/projects/project-tenjin-005.png",
        "/projects/project-tenjin-006.png",
        "/projects/project-tenjin-007.png",
        "/projects/project-tenjin-008.png",
      ],
      stack: ["Angular", "Asp.Net Core", "SQL Server"],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-fe",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-api",
      youtube: "https://www.youtube.com/watch?v=d6vigsSpwDo",
      clientName: "Tenjin",
      clientAvatar: "/clients/client-tenjin.webp",
      liveUrl: "https://tenjin-agency.vercel.app/",

      contentHtml: `
  

  

<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>The About page provides information about the company, its vision, and a team of experienced real estate professionals.</li>
  <li>The Projects page showcases featured apartments, townhouses, land plots, and developments with detailed information, amenities, and high-quality images.</li>
  <li>The News page delivers market trends, investment insights, and in-depth analysis of the real estate industry.</li>
  <li>The Contact page allows clients to request consultations, schedule property tours, and connect quickly with the sales team.</li>
</ul>

 

  
 
`,
    },
    // thuong-nail
    {
      id: "thuong-nail",
      title: "Thương Nail Nail Salon Website",

      href: "/projects/thuong-nail",
      cover: [
        "/projects/project-thuong-nail-001.png",
        "/projects/project-thuong-nail-002.png",
        "/projects/project-thuong-nail-003.png",
        "/projects/project-thuong-nail-004.png",
        "/projects/project-thuong-nail-005.png",
        "/projects/project-thuong-nail-006.png",
      ],
      stack: ["Angular", "Asp.Net Core", "SQL Server"],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-fe",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-api",
      youtube: "https://www.youtube.com/watch?v=d6vigsSpwDo",
      clientName: "Thương Nail",
      clientAvatar: "/clients/client-thuong-nail.png",
      liveUrl: "https://thuong-nail.vercel.app/",

      contentHtml: `
  

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>The About page shares the brand story, introduces the professional nail technicians, and highlights the salon’s elegant beauty space.</li>
  <li>The Services page provides detailed information about gel polish, acrylic nails, nail extensions, custom nail art, and manicure and pedicure treatments.</li>
  <li>The Gallery page showcases featured nail designs, the latest trends, and real photos from clients.</li>
  <li>The Contact page allows customers to book appointments quickly, receive consultations, and connect directly with the salon team.</li>
</ul>

 

  
 
`,
    },
    // xua-cu-coffee
    {
      id: "xua-cu-coffee",
      title: "Xua Cũ Coffee Shop Website",

      href: "/projects/xua-cu-coffee",
      cover: [
        "/projects/project-xua-cu-coffee-001.png",
        "/projects/project-xua-cu-coffee-002.png",
        "/projects/project-xua-cu-coffee-003.png",
        "/projects/project-xua-cu-coffee-004.png",
        "/projects/project-xua-cu-coffee-005.png",
        "/projects/project-xua-cu-coffee-006.png",
        "/projects/project-xua-cu-coffee-007.png",
        "/projects/project-xua-cu-coffee-008.png",
      ],
      stack: ["Angular", "Asp.Net Core", "SQL Server"],
      // githubRepo: "https://github.com/yourname/project",
      githubRepoFront:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-fe",
      githubRepoBack:
        "https://github.com/vuutruongnhatthanhhh/meeting-room-booking-api",
      youtube: "https://www.youtube.com/watch?v=d6vigsSpwDo",
      clientName: "Xưa Cũ Coffee",
      clientAvatar: "/clients/client-xua-cu-coffee.png",
      liveUrl: "https://xua-cu-coffee.vercel.app/",

      contentHtml: `
  

  


<ul class="list-disc pl-6 mt-4 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>The About page shares the brand story, highlights the quality ingredients, and introduces the shop’s modern and inviting atmosphere.</li>
  <li>The Menu page features a wide selection of coffee, milk tea, fruit tea, and delicious snacks.</li>
  <li>The News page updates customers on promotions, new products, and engaging articles about coffee culture.</li>
  <li>The Contact page allows customers to place orders, submit feedback, and connect quickly with the support team.</li>
</ul>
 

  
 
`,
    },
  ],
};

export const getExperienceById = (id: string, locale: Locale = "vi") =>
  experienceItems[locale].find((x) => x.id === id);
