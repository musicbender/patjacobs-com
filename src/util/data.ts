import { Projects } from "../../types";

export const filterProjectData = (type: string = 'work', data: Projects[] = []): Projects[] => {
  return data.filter(project => !project.disabled && project.type === type);
}
