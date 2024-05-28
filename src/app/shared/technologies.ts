import { Technology } from '../models/technology.interface';

export const technologies: { [name: string]: Technology } = {
    html: {
        name: 'HTML',
        fontColor: 'text-html',
        icon: 'assets/icons/html.png'
    },
    css: { name: 'CSS', fontColor: 'text-css', icon: 'assets/icons/css.png' },
    javascript: {
        name: 'JavaScript',
        fontColor: 'text-javascript',
        icon: 'assets/icons/js.svg'
    },
    typescript: {
        name: 'TypeScript',
        fontColor: 'text-typescript',
        icon: 'assets/icons/typescript.png'
    },
    bootstrap: {
        name: 'Bootstrap',
        fontColor: 'text-bootstrap',
        icon: 'assets/icons/bootstrap.png'
    },
    react: {
        name: 'React',
        fontColor: 'text-react',
        icon: 'assets/icons/react.svg'
    },
    ionic: {
        name: 'Ionic',
        fontColor: 'text-ionic',
        icon: 'assets/icons/ionic.png'
    },
    php: { name: 'PHP', fontColor: 'text-php', icon: 'assets/icons/php.png' },
    angular: {
        name: 'Angular',
        fontColor: 'text-angular',
        icon: 'assets/icons/angular.svg'
    },
    laravel: {
        name: 'Laravel',
        fontColor: 'text-laravel',
        icon: 'assets/icons/laravel.png'
    },
    serverless: {
        name: 'Serverless',
        fontColor: 'text-serverless',
        icon: 'assets/icons/serverless-48.png'
    },
    nodejs: {
        name: 'NodeJS',
        fontColor: 'text-nodejs',
        icon: 'assets/icons/nodejs.svg'
    },
    nestjs: {
        name: 'NestJS',
        fontColor: 'text-nestjs',
        icon: 'assets/icons/nestjs.svg'
    },
    python: {
        name: 'Python',
        fontColor: 'text-python',
        icon: 'assets/icons/python-48.png'
    },
    firebase: {
        name: 'Firebase',
        fontColor: 'text-firebase',
        icon: 'assets/icons/firebase-48.png'
    },
    sql: {
        name: 'SQL',
        fontColor: 'text-sql',
        icon: 'assets/icons/database-48.png'
    },
    aws: {
        name: 'AWS',
        fontColor: 'text-aws',
        icon: 'assets/icons/aws-48.png',
    },
    mongodb: {
        name: 'MongoDB',
        fontColor: 'text-mongo-db',
        icon:"assets/icons/mongodb.svg"
    },
    nextjs: {
        name: "Next.js",
        fontColor: "text-nextjs",
        icon: 'assets/icons/nextjs.svg'
    },
    redux: {
        name: "Redux",
        fontColor: "text-redux",
        icon: 'assets/icons/redux.svg'
    },
    vue: {
        name: "Vue",
        fontColor: "text-vue",
        icon: 'assets/icons/vue.svg'
    },
    scss: {
        name: "SCSS",
        fontColor: "text-scss",
        icon: 'assets/icons/scss.svg'
    },
    less: {
        name: "LESS",
        fontColor: "text-less",
        icon: 'assets/icons/less.svg'
    },
    threejs: {
        name: "Three.js",
        fontColor: "text-threejs",
        icon: 'assets/icons/threejs-48.png'
    },
    d3js: {
        name: "D3.js",
        fontColor: "text-d3js",
        icon: 'assets/icons/d3js.svg'
    },
    tailwindcss: {
        name: "TailWind CSS",
        fontColor: "text-tailwindcss",
        icon: 'assets/icons/tailwindcss.svg'
    },
    materialui: {
        name: "Material UI",
        fontColor: "text-materialui",
        icon: 'assets/icons/materialui.svg'
    },
    expressjs: {
        name: 'ExpressJS',
        fontColor: "text-expressjs",
        icon: "assets/icons/expressjs.svg"
    },
    java: {
        name: "Java",
        fontColor: "text-java",
        icon: "assets/icons/java.svg"
    },
    springboot: {
        name: "Spring Boot",
        fontColor: "text-springboot",
        icon: "assets/icons/springboot.svg"
    },
    django: {
        name: "Django",
        fontColor: "text-django",
        icon: "assets/icons/django.svg"
    },
    restful: {
        name: "RESTful API",
        fontColor: "text-restful",
        icon: "assets/icons/restful.png"
    },
    graphql: {
        name: "GraphQL",
        fontColor: "text-graphql",
        icon: "assets/icons/graphql.svg"
    },
    mysql: {
        name: "MySQL",
        fontColor: "text-mysql",
        icon: "assets/icons/mysql.svg"
    },
    postgresql: {
        name: "PostgreSQL",
        fontColor: "text-postgresql",
        icon: "assets/icons/postgresql.svg"
    },
    jenkins: {
        name: "Jenkins",
        fontColor: "text-jenkins",
        icon: "assets/icons/jenkins.svg"
    },
    docker: {
        name: "Docker",
        fontColor: "text-docker",
        icon: "assets/icons/docker.svg"
    },
};

export const technologiesFrontend: Technology[] = [
    technologies['html'],
    technologies['css'],
    technologies['javascript'],
    technologies['typescript'],
    technologies['react'],
    technologies['nextjs'],
    technologies['redux'],
    technologies['angular'],
    technologies['vue'],
    technologies['less'],
    technologies['scss'],
    technologies['threejs'],
    technologies['d3js'],
    technologies['ionic'],
    technologies['tailwindcss'],
    technologies['materialui']
];

export const technologiesBackend: Technology[] = [
    technologies['serverless'],
    technologies['nodejs'],
    technologies['nestjs'],
    technologies['expressjs'],
    technologies['java'],
    technologies['springboot'],
    technologies['python'],
    technologies['django'],
    technologies['restful'],
    technologies['graphql'],
    technologies['firebase'],
    // technologies['sql'],
    technologies['mysql'],
    technologies['postgresql'],
    technologies['mongodb'],
    technologies['jenkins'],
    technologies['docker'],
    technologies['aws']
];
