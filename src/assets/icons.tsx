import { library, findIconDefinition, IconName } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export const getIcon = (name: IconName) => findIconDefinition({ prefix: 'fas', iconName: name });