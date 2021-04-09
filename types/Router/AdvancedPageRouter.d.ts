import { IContent } from '../HtmlComponent/Contract/IContent';
import { Constructable } from '../System/Types/Constructable';
import { IAdvancedRoute } from './IAdvancedRoute';
/**
 * If you click a link in a real web site, the browser asks the server for a page and it routes you to the relevant
 * page. But if you have a single page app running on a file, with no web server, like the one this framework
 * was built for, you need something to simulate that.
 *
 * The Advanced version of the router was created to provide the recursively-nested routes that you can get with Angular.
 * It functions. But I hate it. I don't like setting up routes in Angular because it takes editing too many files even
 * for simple sites. That said, for a very large and complex site it's nice to have the organization, so there's that.
 *
 * I found this to be complex and brittle and if you want to use the advanced features (it's pretty trivial to have three
 * columns, each populated via the route, for example), it can get hard to set up and easy to break (be careful not
 * to try to populate a router-outlet you just replaced). In terms of real use cases, I would prefer simple routes
 * and do the work in components.
 *
 * But this is here, if you want to use it.
 *
 * This class clears the route container, which is expected to be a static container in the wrapper HTML page, or the body.
 * When you give it the relevant route, it executes the callback or returns the view/HTML element you defined for the route,
 * and sticks it inside the container. Then it searches for child routes to put into child route containers, etc,
 * until it runs out of children.
 */
export declare class AdvancedPageRouter {
    static readonly matchedRoute: Readonly<{
        route: string;
        params: ReadonlyMap<string, string>;
    }>;
    static readonly params: ReadonlyMap<string, string>;
    static historyMaxLength: number;
    static readonly history: ReadonlyArray<string>;
    static notFound: string;
    static configure(routes: IAdvancedRoute[]): void;
    /**
     * Set up a top-level route, which is expected to route to the main app container. This is expected to contain
     * a child-container element, which contains lower level routes that are stored as children, added using the addRoute()
     * method.
     */
    static addAppRoute(payload: (HTMLElement | IContent) | (() => HTMLElement | IContent) | Constructable<IContent>, route?: string, urlRoutingEnabled?: boolean): void;
    static addRoute(route: IAdvancedRoute): void;
    static deleteRoute(route: string): void;
    static route(route?: string, updateUrl?: boolean): void;
    static back(): void;
    static turnOnUrlRouting(): void;
    private static _routes;
    private static _matchedRoute?;
    private static _history;
    private static _historyMaxLength;
    private static _routeContainers;
    private static _hashChange?;
    private static _lastRoute?;
    private static _notFound?;
    private static _searchRoutes(url, route, routesToSearch);
    private static _testRoute(routeString, urlString);
    private static _renderRoute({route, parent});
    private static _renderNotFound();
    private static _prepareRouterContainer(route, parentRoute?);
}
