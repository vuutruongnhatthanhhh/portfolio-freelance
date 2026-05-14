// lib/experience-data.ts
export type ExperienceItem = {
  id: string; // slug
  title: string; // localized
  type: string; // localized ("Full-time" | "Toàn thời gian" ...)
  duration: string; // localized ("10.2022 — Present" | "10.2022 — Hiện tại")
  company?: string;
  companyUrl?: string;
  href: string;
  cover?: string | string[];
  stack: string[];
  overview?: string[]; // localized
  responsibilities: string[]; // localized
  achievements?: string[]; // localized
  links?: { label: string; href: string }[]; // localized
  contentHtml?: string;
};

export type Locale = "vi" | "en";

export const experienceItems: Record<Locale, ExperienceItem[]> = {
  vi: [
    {
      id: "fullstack-nap",
      title: "Lập trình viên Full-stack",
      type: "Toàn thời gian",
      duration: "10.2024 — Hiện tại",
      company: "Công ty TNHH Ngân Anh Phát",
      companyUrl: "https://ngananhphat.com",
      href: "/experience/fullstack-nap",
      cover: [
        "/experience/odoo1.png",
        "/experience/odoo2.png",
        "/experience/napworkspace1.png",
        "/experience/napworkspace2.png",
        "/experience/napworkspace3.png",
        "/experience/napworkspace4.png",
        "/experience/napworkspace5.png",
        "/experience/napworkspace6.png",
      ],
      stack: [
        "Next.js",
        "MongoDB",
        "Python",
        "Docker",
        "Linux",
        "Bash Script",
        "GitHub Actions (CI/CD)",
      ],

      responsibilities: [
        "Sử dụng Odoo thiết kế các module phục vụ cho việc quản lý dự án, sản xuất, bán hàng của công ty",
        "Thiết kế và phát triển phần mềm ERP riêng biệt đáp ứng được việc quản lý giao nhận hàng hóa, vật tư, quản lý phương tiện vận tải, quản lý những công đoạn riêng biệt khác",
      ],
      achievements: [
        "Giảm 30–40% thời gian nhập liệu và theo dõi tiến độ dự án.",
        "Tăng hiệu quả quản lý nhờ nền tảng tập trung.",
        "Nhờ số hóa quy trình và chuẩn hóa dữ liệu, giảm chi phí vận hành nội bộ (giảm nhân lực xử lý lặp lại)",
        "Khả năng mở rộng: hệ thống dễ dàng bổ sung thêm module mới mà không ảnh hưởng core, đáp ứng các nhu cầu phát sinh từ doanh nghiệp.",
      ],

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   1. Thiết kế phát triển các module cho Odoo
  </h2>
  <p class="text-lg text-slate-800 dark:text-white mb-2">
   Công nghệ sử dụng : Python, Docker </p>
  

<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  Chức năng nổi bật
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Module quản lý dự án: quản lý tiến độ, phân công nhiệm vụ, nhắc nhở báo hạn qua email cá nhân, ...</li>
   <li>Module sản xuất: từ dự án tạo ra các lệnh sản xuất với các sản phẩm, nguyên liệu tương ứng. Đồng thời thống kê sản phẩm còn thiếu trong kho để lên đơn những nguyên liệu cần mua</li>
  </ul>

  <figure class="my-6">
    <img src="/experience/odoo1.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
      Module quản lý dự án
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/experience/odoo2.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
      Module sản xuất
    </figcaption>
  </figure>

    <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   2. Thiết kế phát triển phần mềm ERP riêng biệt cho doanh nghiệp
  </h2>
   <p class="text-lg text-slate-800 dark:text-white mb-2">
   Công nghệ sử dụng : Next.js, MongoDB, Docker, Linux, Bash Script, Github Actions (CI/CD) </p>
<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  2.1. Quản lý các công đoạn của quá trình cắt nguyên vật liệu
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Quản lý các công đoạn của quá trình cắt nguyên vật liệu (thép, inox, ...), thông báo cụ thể qua email, group google chat về người thực hiện và từng trạng thái của quá trình</li>
   <li>Hiển thị chính xác số lượng các nguyên vật liệu trong kho, số lượng lấy ra và cất kho</li>
  </ul>

    <figure class="my-6">
    <img src="/experience/napworkspace1.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Quản lý các công đoạn của quá trình cắt nguyên vật liệu
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/experience/napworkspace2.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
      Kho nguyên vật liệu
    </figcaption>
  </figure>
  <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  2.2. Quản lý vật tư
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Quản lý tất cả vật tư của công ty, người được cấp phát, vị trí và tình trạng cụ thể phục vụ cho việc kiểm kê hàng tháng</li>
   <li>Ghi lại lịch sử cấp phát cũng như báo mất, hỏng của vật tư</li>
  </ul>
 <figure class="my-6">
    <img src="/experience/napworkspace4.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Quản lý vật tư
    </figcaption>
  </figure>

  <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  2.3. Quản lý giao nhận hàng hóa
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Quản lý các thông tin giao nhận hàng hóa của doanh nghiệp</li>
   <li>Người quản lý có thể phê duyệt, từ chối, cũng như gán tài xế</li>
  </ul>
   <figure class="my-6">
    <img src="/experience/napworkspace3.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Quản lý giao nhận hàng hóa
    </figcaption>
  </figure>
 <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  2.4. Tự động backup dữ liệu, CI/CD
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Bash script sử dụng crontab để tự động backup database, dữ liệu ảnh và file upload trên server (2 lần / ngày)</li>
   <li>Thiết kế và cấu hình workflow GitHub Actions cho CI/CD, giúp tự động hoá quá trình build, kiểm thử và triển khai sau mỗi lần push.</li>
  </ul>
  <figure class="my-6">
    <img src="/experience/napworkspace5.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Bash script backup database và file trên server
    </figcaption>
  </figure>

   <figure class="my-6">
    <img src="/experience/napworkspace7.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Cấu hình key trên Github để có thể thao tác với server
    </figcaption>
  </figure>

  <figure class="my-6">
    <img src="/experience/napworkspace6.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   deploy.yml tự động hóa quy trình build, test, deploy ứng dụng trên môi trường production bằng Github Actions
    </figcaption>
  </figure>
`,
    },
  ],
  en: [
    {
      id: "fullstack-nap",
      title: "Full-stack Developer",
      type: "Full-time",
      duration: "10.2022 — Present",
      company: "Ngan Anh Phat Co., Ltd.",
      companyUrl: "https://ngananhphat.com",
      href: "/experience/fullstack-nap",
      cover: [
        "/experience/odoo1.png",
        "/experience/odoo2.png",
        "/experience/napworkspace1.png",
        "/experience/napworkspace2.png",
        "/experience/napworkspace3.png",
        "/experience/napworkspace4.png",
        "/experience/napworkspace5.png",
        "/experience/napworkspace6.png",
      ],
      stack: [
        "Next.js",
        "MongoDB",
        "Python",
        "Docker",
        "Linux",
        "Bash Script",
        "GitHub Actions (CI/CD)",
      ],

      responsibilities: [
        "Developed and customized Odoo modules to support the company's project management, manufacturing, and sales processes.",
        "Designed and developed a standalone ERP system to manage logistics, materials, vehicles, and other internal operations.",
      ],

      achievements: [
        "Reduced data entry and project tracking time by 30–40%.",
        "Improved management efficiency through a centralized digital platform.",
        "Standardized workflows and data, reducing operational costs and manual workloads.",
        "Ensured scalability — the system allows adding new modules without affecting the core, meeting evolving business needs.",
      ],

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   1. Design and Development of Odoo Modules
  </h2>
  <p class="text-lg text-slate-800 dark:text-white mb-2">
   Technologies used: Python, Docker
  </p>

  <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  Key Features
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Project Management Module: track progress, assign tasks, and send deadline reminders via personal email.</li>
    <li>Manufacturing Module: generate manufacturing orders from projects with corresponding products and materials, and automatically calculate missing inventory for purchase orders.</li>
  </ul>

  <figure class="my-6">
    <img src="/experience/odoo1.png"
         alt="Project Management Module"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
      Project Management Module
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/experience/odoo2.png"
         alt="Manufacturing Module"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
      Manufacturing Module
    </figcaption>
  </figure>

  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
   2. Design and Development of a Custom ERP System
  </h2>
  <p class="text-lg text-slate-800 dark:text-white mb-2">
   Technologies used: Next.js, MongoDB, Docker, Linux, Bash Script, GitHub Actions (CI/CD)
  </p>

<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  2.1. Material Cutting Process Management
</h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Manage all stages of the material cutting process (steel, stainless steel, etc.) and automatically send notifications via email and Google Chat about assigned employees and process statuses.</li>
    <li>Display accurate material inventory, including quantities taken and returned to storage.</li>
  </ul>

  <figure class="my-6">
    <img src="/experience/napworkspace1.png"
         alt="Material Cutting Management"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Material Cutting Process Management
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/experience/napworkspace2.png"
         alt="Material Warehouse"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
      Material Warehouse
    </figcaption>
  </figure>

  <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  2.2. Material Management
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Manage all company materials, including assigned employees, locations, and conditions for monthly inventory tracking.</li>
   <li>Record issuance history as well as loss and damage reports for each material item.</li>
  </ul>
 <figure class="my-6">
    <img src="/experience/napworkspace4.png"
         alt="Material Management"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Material Management
    </figcaption>
  </figure>

  <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  2.3. Logistics Management
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Manage logistics and delivery information for the company.</li>
   <li>Allow managers to approve, reject, and assign drivers for delivery requests.</li>
  </ul>
   <figure class="my-6">
    <img src="/experience/napworkspace3.png"
         alt="Logistics Management"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Logistics Management
    </figcaption>
  </figure>

 <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
  2.4. Automated Backup and CI/CD
  </h3>
  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
    <li>Implemented Bash scripts with crontab to automatically back up databases, images, and uploaded files on the server (twice per day).</li>
   <li>Designed and configured GitHub Actions workflows for CI/CD to automate build, testing, and deployment after each push.</li>
  </ul>

  <figure class="my-6">
    <img src="/experience/napworkspace5.png"
         alt="Bash Script Backup"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Bash script for database and file backup on the server
    </figcaption>
  </figure>

   <figure class="my-6">
    <img src="/experience/napworkspace7.png"
         alt="GitHub SSH Configuration"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Configuring GitHub SSH keys for server operations
    </figcaption>
  </figure>

  <figure class="my-6">
    <img src="/experience/napworkspace6.png"
         alt="GitHub Actions Deploy Workflow"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   deploy.yml automates the build, test, and deployment process in the production environment using GitHub Actions.
    </figcaption>
  </figure>
`,
    },
  ],
};

export const getExperienceById = (id: string, locale: Locale = "vi") =>
  experienceItems[locale].find((x) => x.id === id);
