// handling all environments related things

const environments={};

environments.stageing={
	port:3000,
	envName:'staging'
};

environments.production={
	port:5000,
	envName:'production'
};

// determine which env was passed
const currentEnvironment = typeof(process.env.NODE_ENV)==='string'? process.env.NODE_ENV:'staging';
// export corresponding environment object

const environmentToExport =
typeof environments[currentEnvironment]==='object'
? environments[currentEnvironment] 
:environments.staging;

// export
module.exports=environmentToExport;