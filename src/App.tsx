import { Practice } from "./practices/Practice";
import { PracticeConfig } from "./practices/PracticeConfig";
import { PracticeReturn } from "./practices/PracticeReturn";
import { PracticeVariable } from "./practices/PracticeVariable";

export default function App() {
  return (
    <div>
      <Practice />
      <PracticeReturn />
      <PracticeVariable />
      <PracticeConfig />
    </div>
  );
}
