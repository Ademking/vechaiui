import * as React from "react";

import DocumentBuilder from "@components/document-builder";

const propList = [
  {
    name: "Kbd",
    value: "kbd",
    propTypes: [],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "kbd.tsx",
        code: `<div className="flex w-full p-8 space-x-4">
  <Kbd>⌘</Kbd>
  <Kbd>shift</Kbd>
  <Kbd>.</Kbd>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const kbdComponent = {
  name: "Kbd",
  importer: `import { Kbd } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Kbd() {
  return <DocumentBuilder component={kbdComponent} />;
}
