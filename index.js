const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;


const portfolioData = {
    name: "Asuka Langley Soryu",
    description: "Segunda Niña, Piloto del EVA-02. Genio de combate y estratega formidable. ¡No necesito la ayuda de nadie! ¡Soy la mejor!",
    projects: [
        { id: 1, title: "Sincronización con EVA-02", tech: "Tecnología NERV, Interfaz Cerebral", summary: "Logro de tasas de sincronización óptimas con la Unidad Evangelion-02.", detail: "Desarrollo y mantenimiento de interfaces neuronales para maximizar la compatibilidad y rendimiento en combate con el EVA-02. ¡Dominio total!" },
        { id: 2, title: "Combate contra Ángeles", tech: "Maniobras de Lucha, Armamento NERV", summary: "Participación y liderazgo en múltiples operaciones críticas contra amenazas Angélicas.", detail: "Estrategias de asalto rápido, coordinación en equipo (cuando es absolutamente necesario) y uso eficiente de armamento progresivo contra entidades desconocidas." },
        { id: 3, title: "Dominio del Japonés", tech: "Inmersión Cultural, Formación Bilingüe", summary: "Perfeccionamiento del idioma japonés para una comunicación eficaz y clara.", detail: "A pesar de mi herencia alemana, mi dominio del japonés es impecable, facilitando la operatividad y el liderazgo en un entorno internacional como NERV. ¡Baka!" }
    ]
};


app.engine('hbs', engine({
    extname: '.hbs', 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts'), 
    partialsDir: path.join(__dirname, 'views/partials'),
    
    helpers: {
        getCurrentYear: () => new Date().getFullYear()
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: "Inicio | El Portafolio de Asuka",
        name: portfolioData.name,
        description: portfolioData.description,
        projects: portfolioData.projects
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: "Sobre la Segunda Niña | Asuka",
        name: portfolioData.name
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        pageTitle: "Misiones y Logros | Asuka",
        projects: portfolioData.projects,
        showDetails: true 
    });
});


app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: "Error 404 | ¡Estúpido!",
        name: portfolioData.name 
    });
});

// --- Iniciar Servidor ---
app.listen(port, () => {
    console.log(`Servidor de Asuka corriendo en http://localhost:${port}`);
});