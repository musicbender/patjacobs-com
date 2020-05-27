const getRelatedProjects = (type, projects) => {
  return projects.filter(p => p.projectType === type);
}

const getNextProject = (currentId, projects) => {
  const index = projects.findIndex(p => p.id === currentId) + 1;
  return index >= projects.length ? projects[0] : projects[index];
}

module.exports= {
  getRelatedProjects,
  getNextProject,
}