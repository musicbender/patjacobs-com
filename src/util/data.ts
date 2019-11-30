export const filterProjectData = (type: any, data: any[]) => {
  return data.filter(project => !project.disabled && project.type === type);
}
