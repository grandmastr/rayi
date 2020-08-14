//@flow
export const doesRouteMatch = (
  {pathname}: {pathname: string},
  route: string = '/'
): boolean => !!pathname.replace(/\/(\w+)\//, '$1').match(route)
