import { IContent } from '../HtmlComponent/Contract/IContent';
import { Constructable } from '../System/Types/Constructable';
import { IRoute } from './IRoute';
/**
 * If you click a link in a real web site, the browser asks the server for a page and it routes you to the relevant
 * page. But if you have a single page app running on a file, with no web server, like the one this framework
 * was built for, you need something to simulate that.
 *
 * This class clears the route container, which is expected to be a static container in the wrapper HTML page, or the body.
 * When you give it the relevant route, it executes the callback or returns the view/HTML element you defined for the route,
 * and sticks it inside the container. The element returned can be wrapped in a layout view, like in ASP.Net.
 *
 * This is a simple version, without the recursive routes found in the advanced router. It was based more on ASP.Net or node.js
 * routing, where you have a flat set of routes and once you find a route, you're done.
 */
export declare class PageRouter {
    static routeContainer: HTMLElement;
    static readonly allRoutes: Readonly<Array<IRoute>>;
    static readonly matchedRoute: Readonly<{
        route: string;
        params: ReadonlyMap<string, string>;
        config: IRoute;
    }>;
    static readonly params: ReadonlyMap<string, string>;
    static historyMaxLength: number;
    static readonly history: ReadonlyArray<string>;
    static notFound: string;
    /**
     * This must be called first before using it, because JS doesn't have static constructors like C#. It sets up the
     * route container, custom elements, and also allows one-step configuration of several other properties.
     *
     * Accepts Keyword Arguments.
     */
    static configure(routes?: IRoute[], defaultLayout?: (() => HTMLElement | IContent) | Constructable<IContent>, defaultStaticLayout?: boolean, notFound?: string, defaultRoute?: string, urlRoutingEnabled?: boolean): void;
    static addRoute(route: IRoute): void;
    /**
     * If linked to a particular page (on the hash), go to it. Else, go to the route specified.
     */
    static defaultRoute(route: string): void;
    static route(route?: string, updateUrl?: boolean): void;
    static back(): void;
    static turnOnUrlRouting(): void;
    private static _configured;
    private static _routes;
    private static _matchedRoute?;
    private static _history;
    private static _historyMaxLength;
    private static _hashChange?;
    private static _lastRoute?;
    private static _notFound?;
    private static _testRoute(routeString, urlString);
    private static _renderRoute(route, previous?);
    private static _renderNotFound();
}
