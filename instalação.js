const execa = require('execa');
const dependencia = '#dependencia_aqui' ;

async function verificarDependencia(dependencia) {
  try {
    await execa.command(`node -e "require('${dependencia}')"`);
    console.log(`A dependência '${dependencia}' está instalada.`);
  } catch (error) {
    console.log(`A dependência '${dependencia}' não está instalada.`);
    await instalarDependencia(dependencia);
  }
}

async function instalarDependencia(dependencia) {
  try {
    console.log(`Instalando a dependência '${dependencia}'...`);
    await execa.command(`npm install ${dependencia}`);
    console.log(`A dependência '${dependencia}' foi instalada com sucesso.`);
  } catch (error) {
    console.error(`Ocorreu um erro ao instalar a dependência '${dependencia}':`, error);
  }
}
