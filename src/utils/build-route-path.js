// /users/:id => expressao regular para encontrar textos dentro de um fromato especificos dentro de textos maiores
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)");

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
