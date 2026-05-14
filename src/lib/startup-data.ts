// lib/startup-data.ts
export type ExperienceItem = {
  id: string;
  title: string;

  href: string;
  cover?: string | string[];
  stack: string[];
  overview?: string[];

  links?: { label: string; href: string }[];
  contentHtml?: string;

  // 👇 thêm các field tuỳ chọn để page nhận biết
  githubRepo?: string; // 1 link duy nhất
  githubRepoFront?: string; // FE
  githubRepoBack?: string; // BE
  youtube?: string; // link video demo
};

export type Locale = "vi" | "en";

export const experienceItems: Record<Locale, ExperienceItem[]> = {
  vi: [
    {
      id: "tjguard",
      title: "TJGuard - Phần mềm quản lý mật khẩu",

      href: "/startup/tjguard",
      cover: [
        "/freelance/startup-tjguard-000.png",
        "/freelance/startup-tjguard-001.png",
        "/freelance/startup-tjguard-002.png",
        "/freelance/startup-tjguard-003.png",
        "/freelance/startup-tjguard-004.png",
        "/freelance/startup-tjguard-005.png",
        "/freelance/startup-tjguard-006.png",
        "/freelance/startup-tjguard-007.png",
        "/freelance/startup-tjguard-008.png",
      ],
      stack: ["Next.js", "Supabase", "Tailwind CSS", "Payos", "Upstash Redis"],
      // githubRepo: "https://github.com/yourname/project",
      // githubRepoFront:
      //   "https://github.com/vuutruongnhatthanhhh/ecommerce-reactjs",
      // githubRepoBack:
      //   "https://github.com/vuutruongnhatthanhhh/ecommerce-nodejs",
      // youtube: "https://www.youtube.com/watch?v=080oQLMAtt0&t=233s",

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-5">
   1. Công nghệ sử dụng
  </h2>

  


  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
<li>Xây dựng giao diện người dùng và REST API với Next.js</li>
<li>Sử dụng PostgreSQL thông qua Supabase làm cơ sở dữ liệu chính</li>

<li>Áp dụng Argon2id để băm/xác thực mật khẩu và XChaCha20-Poly1305 để mã hóa dữ liệu nhạy cảm đối xứng</li>
<li>Sử dụng Supabase Edge Functions kết hợp cronjob để chạy các tác vụ định kỳ hằng ngày, bao gồm: chuyển trạng thái gói đăng ký hết hạn sang expired, vô hiệu hóa 2FA với tài khoản hết hạn gói, gửi email nhắc nhở trước khi gói hết hạn, ...</li>  
<li>Sử dụng GitHub Actions để tự động sao lưu cơ sở dữ liệu hằng ngày</li>
<li>Tích hợp Payos để xử lý thanh toán</li>
<li>Sử dụng Upstash Redis để giới hạn tốc độ request trên các endpoint quan trọng — đăng ký, OTP, đặt lại mật khẩu, chia sẻ vault - chống spam và lạm dụng.</li>
</ul>

  <figure class="my-6">
    <img src="/freelance/startup-tjguard-009.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Edge Functions thực hiện các logic định kỳ như chuyển trạng thái gói, gửi email nhắc nhở, ...
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/freelance/startup-tjguard-010.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Cronjob gọi Edge Functions thực hiện các tác vụ định kỳ
    </figcaption>
  </figure>

     <figure class="my-6">
    <img src="/freelance/startup-tjguard-011.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Github Actions tự động sao lưu cơ sở dữ liệu hằng ngày
    </figcaption>
  </figure>

   <figure class="my-6">
    <img src="/freelance/startup-tjguard-012.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Tích hợp Payos để xử lý thanh toán cho các gói đăng ký
    </figcaption>
  </figure>
  <figure class="my-6">
    <img src="/freelance/startup-tjguard-013.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Sử dụng Upstash Redis để giới hạn tốc độ request trên các endpoint quan trọng
    </figcaption>
  </figure>





  


  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
  2. Ứng dụng
  </h2>
<ul class="list-disc mt-5 pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Website marketing TJGuard, xem tại <a class="text-blue-600 underline" href="https://tjguard.com" target="_black">đây</a></li>
  <li>App TJGuard, xem tại <a class="text-blue-600 underline" href="https://vault.tjguard.com" target="_black">đây</a></li>
 </ul>
`,
    },
  ],
  en: [
    {
      id: "tjguard",
      title: "TJGuard - Password manager",

      href: "/startup/tjguard",
      cover: [
        "/freelance/startup-tjguard-000.png",
        "/freelance/startup-tjguard-001.png",
        "/freelance/startup-tjguard-002.png",
        "/freelance/startup-tjguard-003.png",
        "/freelance/startup-tjguard-004.png",
        "/freelance/startup-tjguard-005.png",
        "/freelance/startup-tjguard-006.png",
        "/freelance/startup-tjguard-007.png",
        "/freelance/startup-tjguard-008.png",
      ],
      stack: ["Next.js", "Supabase", "Tailwind CSS", "Payos", "Upstash Redis"],
      // githubRepo: "https://github.com/yourname/project",
      // githubRepoFront:
      //   "https://github.com/vuutruongnhatthanhhh/ecommerce-reactjs",
      // githubRepoBack:
      //   "https://github.com/vuutruongnhatthanhhh/ecommerce-nodejs",
      // youtube: "https://www.youtube.com/watch?v=080oQLMAtt0&t=233s",

      contentHtml: `
  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-5">
   1. Technologies Used
  </h2>

  


  <ul class="list-disc pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
<li>Building user interface and REST API with Next.js</li>
<li>Using PostgreSQL through Supabase as the main database</li>

<li>Applying Argon2id for password hashing/authentication and XChaCha20-Poly1305 for symmetric encryption of sensitive data</li>
<li>Using Supabase Edge Functions combined with cron jobs to run scheduled tasks daily, including: updating subscription status to expired, disabling 2FA for expired accounts, sending reminder emails before subscription expiration, ...</li>
<li>Using GitHub Actions for automated daily database backups</li>
<li>Integrating Payos for payment processing</li>
<li>Used Upstash Redis to rate limit critical endpoints — registration, OTP, password reset, and vault sharing — to prevent spam and abuse.</li>
</ul>

  <figure class="my-6">
    <img src="/freelance/startup-tjguard-009.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
     Edge Functions handle scheduled tasks such as updating subscription statuses, sending reminder emails, and more.
    </figcaption>
  </figure>

    <figure class="my-6">
    <img src="/freelance/startup-tjguard-010.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Cronjob calls Edge Functions to perform scheduled tasks
    </figcaption>
  </figure>

     <figure class="my-6">
    <img src="/freelance/startup-tjguard-011.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Github Actions automatically backup the database daily
    </figcaption>
  </figure>

   <figure class="my-6">
    <img src="/freelance/startup-tjguard-012.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
   Integrating Payos for payment processing for subscription packages
    </figcaption>
  </figure>

  <figure class="my-6">
    <img src="/freelance/startup-tjguard-013.png"
         alt="System architecture"
         class="w-full max-w-full rounded-lg shadow-md mx-auto" />
    <figcaption class="mt-2 text-lg text-slate-700 dark:text-slate-400 text-center">
  Used Upstash Redis to rate limit critical endpoints
    </figcaption>
  </figure>

  


  <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
  2. Applications
  </h2>
<ul class="list-disc mt-5 pl-6 space-y-2 text-lg text-slate-800 dark:text-slate-300">
  <li>Website marketing TJGuard, view at <a class="text-blue-600 underline" href="https://tjguard.com" target="_black">here</a></li>
  <li>App TJGuard, view at <a class="text-blue-600 underline" href="https://vault.tjguard.com" target="_black">here</a></li>
 </ul>
`,
    },
  ],
};

export const getExperienceById = (id: string, locale: Locale = "vi") =>
  experienceItems[locale].find((x) => x.id === id);
