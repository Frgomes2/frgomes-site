import WorkspaceProvider from "@/components/workspace/WorkspaceProvider";
import ActivityBar from "@/components/workspace/ActivityBar";
import Explorer from "@/components/workspace/Explorer";
import Tabs from "@/components/workspace/Tabs";
import Minimap from "@/components/workspace/Minimap";
import StatusBar from "@/components/workspace/StatusBar";
import CommandPalette from "@/components/workspace/CommandPalette";
import Panel from "@/components/workspace/Panel";
import Gutter from "@/components/workspace/Gutter";
import RevealManager from "@/components/workspace/RevealManager";

import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Projetos from "@/components/sections/Projetos";
import Servicos from "@/components/sections/Servicos";
import Contato from "@/components/sections/Contato";

export default function Home() {
  return (
    <WorkspaceProvider>
      <RevealManager />
      <ActivityBar />
      <Explorer />
      <Minimap />

      <div className="main">
        <Tabs />
        <div className="doc">
          <Gutter />
          <div className="body">
            <Hero />
            <Sobre />
            <Projetos />
            <Servicos />
            <Contato />
          </div>
        </div>
      </div>

      <Panel />
      <StatusBar />
      <CommandPalette />
    </WorkspaceProvider>
  );
}
