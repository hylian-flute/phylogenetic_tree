import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import go from "gojs";
import { phylogeneticTreeData } from "../data/phylogenetic-tree";

const pageStyles = {};
const figureStyle = {
  height: "800px",
};

const draw = () => {
  const phylogeneticTree = new go.Diagram("phylogeneticTree", {
    layout: new go.TreeLayout(),
  });
  phylogeneticTree.nodeTemplate = new go.Node("Auto").add(
    new go.TextBlock({ margin: 8, width: 128, textAlign: "center" }).bind(
      "text",
      "key"
    )
  );
  phylogeneticTree.model = new go.TreeModel(phylogeneticTreeData);
};

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    draw();
  }, []);

  return (
    <main style={pageStyles}>
      <div id="phylogeneticTree" style={figureStyle}></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Phylogenetic Tree</title>;
