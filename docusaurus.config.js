module.exports = {
  title: "CHIRIMEN Open Hardware",
  tagline: "Web ブラウザからハードウェアを制御するプロトタイピング環境です",
  url: "https://chirimen.org",
  baseUrl: "/",
  onBrokenLinks: "error", // デフォルトの "throw" にするとリンク切れでビルド停止
  favicon: "img/favicon.ico",
  organizationName: "chirimen-oh", // Usually your GitHub org/user name.
  projectName: "chirimen.org-docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "CHIRIMEN Open Hardware",
      logo: {
        alt: "CHIRIMEN ロゴ",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "ドキュメント",
          position: "left",
        },
        { to: "blog", label: "ブログ", position: "left" },
        {
          href: "https://github.com/chirimen-oh/chirimen.org-docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "ドキュメント",
          items: [
            {
              label: "CHIRIMEN について",
              to: "docs/",
            },
            {
              label: "チュートリアル",
              to: "docs/tutorial/",
            },
          ],
        },
        {
          title: "コミュニティ",
          items: [
            {
              label: "Slack",
              href:
                "https://docs.google.com/forms/d/1GzkGfCcsRn4A6-uHPsLu2LszkqKcNJ3sFI4XRishHsE/viewform",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/chirimen_oh",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/groups/chirimen",
            },
          ],
        },
        {
          title: "その他",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/chirimen-oh/chirimen.org-docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CHIRIMEN Open Hardware Community`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "about",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/chirimen-oh/chirimen.org-docusaurus/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/chirimen-oh/chirimen.org-docusaurus/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
