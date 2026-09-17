# Complete setup guide

## 1. What you need

This is a static website. You do not need Node.js, npm, React, a database or a backend.

Recommended:

- A current version of Chrome, Edge, Firefox or Safari
- Visual Studio Code or another text editor
- A GitHub account if you want to publish with GitHub Pages
- An EmailJS account only if you want the form to send directly from the page

## 2. Open and test the portfolio

1. Extract the ZIP into a normal folder.
2. Keep the original ZIP as a backup.
3. Open the extracted folder in your editor.
4. Double-click **index.html** for a quick test.
5. For development, install the VS Code **Live Server** extension, right-click **index.html**, and choose **Open with Live Server**.

Check the menu, experience selector, skill filters, project filters, project modal and contact form. Resize the browser to confirm the mobile layout.

## 3. Replace the sample profile

Open **config.js**. Start with the profile object:

~~~js
profile: {
  name: "Your Name",
  headline: "IT Support Engineer",
  roles: [
    "IT Support Engineer",
    "Service Desk Engineer",
    "Endpoint Support Specialist"
  ],
  availability: "Open to new opportunities",
  heroDescription: "A short, specific professional introduction.",
  location: "London, United Kingdom",
  email: "you@example.com",
  phone: "",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  resume: ""
}
~~~

Keep commas, quotation marks and brackets in place. The values in roles rotate automatically in the hero.

## 4. Add your hero profile photo

1. Choose a clear head-and-shoulders portrait. A vertical 4:5 image works best.
2. Save it in **assets/** as WebP, JPG or PNG, for example **profile-photo.webp**.
3. Update the profile settings in **config.js**:

~~~js
photo: "assets/profile-photo.webp",
photoAlt: "Portrait of Your Name",
photoPosition: "50% 35%"
~~~

Change photoPosition if you need to move the visible crop. The first value controls horizontal positioning and the second controls vertical positioning. If photo is empty or the image cannot load, the hero displays your initials automatically.

## 5. Add your resume

1. Export your resume as a PDF.
2. Copy it into **assets/**.
3. Use a simple filename such as **resume.pdf**.
4. Set the resume value in **config.js**:

~~~js
resume: "assets/resume.pdf"
~~~

The resume buttons appear automatically when the value is not empty.

## 6. Update the About section

Edit PORTFOLIO.about in **config.js**.

- paragraphs controls the introduction.
- metrics controls the result cards.
- principles controls the working-principle cards.

Only include numbers you can explain in an interview. Avoid confidential SLA, customer or ticket data.

## 7. Add work experience

Each object inside experience creates one selectable role:

~~~js
{
  period: "2024 - Present",
  role: "IT Support Engineer",
  company: "Company Name",
  location: "London / Hybrid",
  summary: "A short summary of the environment and your responsibility.",
  points: [
    "Resolve L1/L2 incidents across workplace technologies.",
    "Support endpoints, identity and collaboration services.",
    "Improve documentation and recurring-incident handling."
  ],
  tags: ["Microsoft 365", "ServiceNow", "Intune"]
}
~~~

Put the most recent role first. Focus on scope, ownership, technologies and outcomes.

## 8. Manage skills

Each item inside skills creates a card. Categories automatically become filter buttons.

~~~js
{
  name: "Microsoft Intune",
  category: "Endpoint",
  symbol: "IN",
  level: "Working",
  context: "Device",
  description: "Device enrolment, policy, compliance and troubleshooting.",
  accent: "#42c8ff"
}
~~~

Keep symbols short so they remain readable on small screens.

## 9. Add projects

Projects can represent automation, migration, documentation, monitoring, dashboards or service improvement.

~~~js
{
  title: "Support Automation Toolkit",
  type: "Automation",
  category: "Automation",
  kpi: "20% fewer manual steps",
  description: "Short text shown on the project card.",
  detail: "Longer detail shown in the modal.",
  highlights: [
    { value: "20%", label: "manual steps reduced" },
    { value: "6", label: "tasks automated" },
    { value: "Faster", label: "diagnostics" }
  ],
  tags: ["PowerShell", "Support", "Automation"],
  image: "",
  liveUrl: "",
  codeUrl: "",
  wide: true,
  narrow: false,
  colourA: "#1fb984",
  colourB: "#3659d9"
}
~~~

For an image, copy a WebP, PNG or JPG file into **assets/** and set:

~~~js
image: "assets/project-name.webp"
~~~

Never publish screenshots containing names, email addresses, internal URLs, IP addresses, customer data, ticket details or credentials.

## 10. Add achievements and certifications

Each item inside achievements creates a selectable entry:

~~~js
{
  title: "ITIL 4 Foundation",
  type: "Certification",
  icon: "IT",
  year: "2026",
  description: "A short description.",
  meta: ["ITSM", "Service Management", "Process"]
}
~~~

Use accurate titles and dates. You can also include relevant recognition, learning milestones and measurable improvement work.

## 11. Configure the contact form

The form works in two modes.

### Email fallback

Leave the EmailJS fields empty. Submitting the form opens the visitor's email application using the profile.email value.

### EmailJS

1. Create an EmailJS account and connect the receiving mailbox.
2. Create a template containing these variables:

~~~text
{{from_name}}
{{from_email}}
{{company}}
{{message}}
~~~

3. Add the values in **config.js**:

~~~js
emailjs: {
  serviceId: "service_xxxxx",
  templateId: "template_xxxxx",
  publicKey: "xxxxxxxxxxxxx"
}
~~~

4. Test from a local static server and from the published site.

The EmailJS public browser key can be used in frontend code. Do not add passwords, private API keys or server credentials.

## 12. Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the **contents** of the portfolio folder.
3. Confirm **index.html** is at the repository root.
4. Open **Settings > Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**.
7. Save and wait for the site URL to appear.

The **.nojekyll** file should remain in the repository.

## 13. Publish with another static host

For Netlify, Cloudflare Pages or similar services, upload or connect the repository and use the project root as the publish directory. There is no build command.

## 14. Troubleshooting

| Problem | Check |
| --- | --- |
| Blank page | Confirm index.html, config.js and app.js are together and inspect the browser console. |
| No styling | Confirm styles.css is beside index.html. |
| Sample content remains | Save config.js and hard-refresh the browser. |
| Resume button missing | Set profile.resume to a valid file path. |
| Profile photo missing | Check profile.photo and the case-sensitive filename in assets/. The initials fallback appears automatically. |
| Project image missing | Check the case-sensitive filename and path. |
| Contact form does not send | Verify the EmailJS IDs and template variables, or use the email fallback. |
| GitHub Pages returns 404 | Confirm Pages uses main and /(root), and index.html is in the root. |
| Animations are minimal | The site respects the operating system's reduced-motion preference. |

## 15. Final launch checklist

- Replace the sample name, companies, email and social links.
- Verify every date, technology, certification and metric.
- Test every navigation link and filter.
- Test the project modal with keyboard and mouse.
- Check the resume download.
- Check the portrait crop on desktop and mobile.
- Test at desktop, tablet and phone widths.
- Confirm there is no confidential information.
- Test the published link in a private browser window.
