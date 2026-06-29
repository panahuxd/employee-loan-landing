# Employee Loan Landing Page

_Started 2026-06-29 10:43 UTC_

---

## User

we want to design a landing page, it's goal is to introduce our special loan for the employees of the enterprises. the landing page should consist sections briefed in the attached file. the visual style and look of the landing page should be modern and also aligned with digikala business brand and website (b2b.digikala.com). page is in farsi (RTL) uses the hAI design system rules and components. theillustrations should match the concept and goal of the landing page. avoid any fully cartoon style illustrations. add semi-realistic illustrations. give both desktop and mobile versions of the landing page. keep aligned with best practices for each section composition, layout and, and design.

## Assistant

I'll start by reading the brief and exploring the design system.

_[tool: read_file]_

I need to extract the text from the docx. Let me parse it.

_[tool: run_script]_

Got the full brief. Now let me explore the design system structure.

_[tool: list_files]_

_[tool: list_files]_

I'll read the key token files and component prompts to ground my design.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now the component prompts and the Logo/Icon/Button/Accordion APIs.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Let me check the approved icons and look at the Logo component artwork.

_[tool: read_file]_

I have a thorough brief and the design system grounded. A few decisions genuinely shape the design — let me confirm before building.

_[tool: questions_v2]_

## User

Questions answered:
- illustrations: جای‌گذار (image-slot) بگذار تا بعداً عکس/ایلوستریشن خودمان را دراپ کنیم
- accent: سرمه‌ای + یک رنگ مکمل ملایم برای بخش‌های کلیدی
- cobrand: خیر، فقط برند دیجی‌کالا بیزینس
- variations: چند گزینه برای کل سبک بصری
- delivery: دو فریم جدا (دسکتاپ و موبایل) کنار هم روی بوم
- footer: use the info in the image attached below

## Assistant

_[tool: view_image]_

Footer captured. Now let me set up. I'll build a design-canvas with desktop + mobile frames across a few visual-style variants. Let me grab the starters and read the DS components.

_[tool: update_todos]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now the bundle export names and base CSS.

_[tool: read_file]_

_[tool: grep]_

Let me read the canvas starter to understand artboard sizing.

_[tool: read_file]_

Now I understand the canvas. Artboards clip to a fixed height, so I'll measure rendered page heights and feed them back. Let me build. First, the theme system and page styles.

_[tool: write_file]_

Now the main page component with all sections.

_[tool: write_file]_

Now the canvas app with height measurement, and the HTML host.

_[tool: write_file]_

_[tool: write_file]_

Add a screen label to the page root for comment context, then preview.

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Rendering works. Let me zoom out to see the full canvas of all six frames.

_[tool: multi_screenshot]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

Theme A looks clean. Let me see all three style variants together.

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Let me check theme C (bold/dark) and a mobile frame closely.

_[tool: save_screenshot]_

Theme C dark hero and theme B render correctly. Let me inspect one frame at readable scale to check typography, icons, and footer detail.

_[tool: save_screenshot]_

Excellent — clean and on-brand. Let me check the lower sections and footer.

_[tool: save_screenshot]_

Steps, categories, mechanism all good. Let me verify the footer against the reference.

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

Everything renders correctly across all three variants and both devices — RTL header, hero split, value cards, 3 steps, categories, mechanism timeline, FAQ accordion, and a footer faithful to the reference. Let me clean up my check screenshots and hand off.

_[tool: delete_file]_

_[tool: update_todos]_

صفحه آماده است. حالا برای تأیید نهایی باز می‌کنم.

_[tool: ready_for_verification]_

Two soft adherence nudges about raw white — I'll swap them for the DS surface token.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

لندینگ آماده است — یک بوم با سه سبک بصری، هرکدام در دو فریم دسکتاپ و موبایل، کنار هم:

- **الف · مینیمال روشن** — سفید، تک‌رنگ سرمه‌ای، خطوط مویی، فضای تنفس زیاد
- **ب · اعتماد گرم** — سرمه‌ای + طلایی ملایم به‌عنوان رنگ مکمل، سطوح کرم گرم
- **ج · سرمه‌ای جسور** — هیرو و فوتر تیره سرمه‌ای، تایپ پررنگ و کارت‌های برجسته

همه با کامپوننت‌های hAI (Button، Icon، Logo، Accordion)، فونت ایران‌یکان‌ایکس، آیکن‌های lucide و RTL کامل ساخته شده‌اند. تمام سکشن‌های بریف پیاده شده: هدر، هیرو، ارزش‌های پیشنهادی، ۳ مرحله، دسته‌بندی‌ها، سازوکار، سوالات متداول و فوتر (مطابق تصویر شما).

چند نکته:
- جای تصاویر را با placeholderهای قابل‌دراپ گذاشتم (هیرو، سه مرحله، سازوکار، و نمادهای فوتر). یک تصویر را دراپ کنید، در همان فریم ذخیره می‌شود.
- روی بوم می‌توانید هر فریم را جابه‌جا/حذف کنید، نامش را تغییر دهید، یا با دکمه گوشه به حالت تمام‌صفحه ببرید تا یک سبک را کامل ببینید.

بگویید کدام سبک را ادامه دهیم، یا اگر ترکیبی از این سه را می‌خواهید اعمال کنم.

## User

don't use illustartion in this section. use another pattern without illustration for this section

## Assistant

برطرف می‌کنم — سکشن «۳ مرحله» را بدون ایلوستریشن و با الگوی کارت‌های شماره‌دار (عدد واترمارک + آیکن) بازطراحی می‌کنم.

_[tool: str_replace_edit]_

Let me verify the new steps pattern renders cleanly.

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

الگوی جدید سکشن مراحل آماده است — کارت‌های شماره‌دار با عدد واترمارک کم‌رنگ، آیکن، و برچسب «مرحله اول/دوم/سوم»، بدون هیچ ایلوستریشنی. روی هر سه سبک اعمال شد.

_[tool: ready_for_verification]_

انجام شد. سکشن «۳ مرحله» حالا از کارت‌های شماره‌دار (عدد واترمارک + آیکن + برچسب مرحله) استفاده می‌کند، بدون ایلوستریشن. روی هر سه سبک و در نسخه‌های دسکتاپ و موبایل اعمال شده است.

## User

use the arrow icon pointing to the left.

## Assistant

آیکن فلش الان به‌خاطر RTL خودکار آینه می‌شود و به راست اشاره می‌کند. آینه‌شدن را غیرفعال می‌کنم تا به چپ اشاره کند.

_[tool: str_replace_edit]_

آیکن فلش در دکمه‌های «دریافت وام» (هدر و هیرو) و «شروع فرایند دریافت وام» حالا به چپ اشاره می‌کند.

_[tool: ready_for_verification]_

انجام شد — فلش‌ها به چپ اشاره می‌کنند.

## User

user logo with primary color

## Assistant

لوگو را به رنگ اصلی برند (سرمه‌ای) تغییر می‌دهم؛ در سبک تیره (ج) برای خوانایی سفید می‌ماند.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

لوگوی هدر و فوتر حالا با رنگ اصلی برند (سرمه‌ای #093672) نمایش داده می‌شود؛ در سبک «ج · سرمه‌ای جسور» که زمینه تیره دارد، سفید باقی می‌ماند.

_[tool: ready_for_verification]_

انجام شد.

## User

user small size of logo in mobile frame

## Assistant

لوگوی هدر را در نسخه موبایل کوچک‌تر می‌کنم.

_[tool: str_replace_edit]_

لوگوی هدر در فریم موبایل کوچک‌تر شد (۲۳px در موبایل، ۳۰px در دسکتاپ).

_[tool: ready_for_verification]_

انجام شد.

