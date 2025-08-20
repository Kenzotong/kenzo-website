// components/AboutPageContent.js
import React from 'react';

export default function AboutPageContent() {
  return (
    <div
      className="
        flex 
        flex-col              /* Mobile: stack columns */
        lg:flex-row           /* Desktop: side by side */
        h-auto                /* Mobile: auto height */
        lg:h-[calc(100vh-150px-68px)] /* Desktop: full viewport minus navbar */
        overflow-visible      /* Mobile: allow page scroll */
        lg:overflow-hidden    /* Desktop: hide overflow (no page scroll) */
      "
    >
      {/* Left column */}
      <div
        className="
          w-full 
          lg:w-2/5 
          p-8 
          flex 
          flex-col 
          items-center 
          justify-center
        "
      >
        <img
          src="/images/Kenzo.jpg"
          alt="Kezhou Tong"
          className="w-[250px] h-auto object-cover mb-6"
        />
        <p className="font-jost text-[15px] w-[250px] leading-relaxed">
          一名旅居德国摄影师,在德国生活七年一直专注于摄影创作。无论是身边发生的决定性瞬间,还是大自然的鬼斧神工,我都希望通过镜头把这些珍贵的画面记录下来。
        </p>
      </div>

      {/* Right column */}
      <div className="font-jost flex-1 p-8 overflow-y-auto scrollbar-hide">
        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-[24px] mb-4">EXPERIENCE 活动经验</h2>
          <ul className="space-y-2 text-[16px] leading-snug">
            <li>2019 BWF 世界羽联世界巡回赛 YONEX 德国公开赛</li>
            <li>2022 Eurobike 法兰克福自行车展</li>
            <li>2022 InnoTrans 柏林轨道交通展览会</li>
            <li>2023 BWF 世界羽联世界巡回赛 YONEX 德国公开赛</li>
            <li>2023 Hannover Messe 汉诺威工业展</li>
            <li>2023 Intersolar 慕尼黑光伏展</li>
            <li>2023 Gamescom 科隆游戏展</li>
            <li>2023 IFA 柏林国际电子消费品展览会</li>
            <li>2024 BWF 世界羽联世界巡回赛 YONEX 德国公开赛</li>
            <li>2024 Hannover Messe 汉诺威工业展</li>
            <li>2024 IFA 柏林国际电子消费品展览会</li>
            <li>2024 InterTabac 多特蒙德烟草展</li>
            <li>2024 SPIEL ESSEN 埃森桌游展</li>
            <li>2024 Roborock 石头科技新品发布会宣传片</li>
            <li>2025 BWF 世界羽联世界巡回赛 YONEX 德国公开赛</li>
            <li>2025 Hannover Messe 汉诺威工业展</li>
            <li>2025 Intersolar 慕尼黑光伏展</li>
            <li>2025 “投资福建”经贸交流会/“清新福建”文旅推介会</li>
            <li>2025 “天府粮仓”精品品牌推介会</li>
            <li>2025 通裕重工欧洲子公司揭牌仪式</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-[24px] mb-4">SKILLS 技能</h2>
          <ul className="space-y-1 text-[16px]">
            <li>Adobe Photoshop</li>
            <li>Adobe Lightroom</li>
            <li>Adobe Premiere</li>
            <li>Final Cut Pro</li>
          </ul>
        </section>

        {/* Download Resume */}
        <section className="mt-auto">
          <a
            href="/files/resume.pdf"
            download
            className="text-[20px] hover:underline"
          >
            Download Resume 简历下载
          </a>
        </section>
      </div>
    </div>
  );
}