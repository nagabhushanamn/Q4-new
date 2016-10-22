

// import { projectId,projectName } from './module1';
// console.log(projectId);  
// console.log(projectName);  



// import comp, {projectId as id,projectName as name} from './module1';
// console.log(comp);

// console.log(id);
// console.log(name);


import comp,{ projectName } from './module1';
// projectName = null;
// comp = null;

comp.name = 'Q4-New';

import display from './module2';
display();


