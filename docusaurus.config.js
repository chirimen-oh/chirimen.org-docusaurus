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
          title: "Docs",
          items: [
            {
              label: "ドキュメント",
              to: "docs/",
            },
            {
              label: "チュートリアル",
              to: "docs/tutorial/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
