
const getJobAplication = () => {

 const stordJobAplication = localStorage.getItem('job-application')

 if (stordJobAplication) {
    return JSON.parse(stordJobAplication);
 }
 return [];
}

const saveJobAplication = id => {
    const stordJobAplications = getJobAplication();
    const exist = stordJobAplications.find(jobID => jobID === id);
    if (!exist) {
     stordJobAplications.push(id);
     localStorage.setItem('job-application', JSON.stringify(stordJobAplications))
    }
}

export  {saveJobAplication,getJobAplication}