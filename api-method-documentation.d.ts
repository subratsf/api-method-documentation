/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-method-documentation.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/elements/dom-if.d.ts" />
/// <reference path="../raml-aware/raml-aware.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../api-annotation-document/api-annotation-document.d.ts" />
/// <reference path="../api-body-document/api-body-document.d.ts" />
/// <reference path="../api-parameters-document/api-parameters-document.d.ts" />
/// <reference path="../api-headers-document/api-headers-document.d.ts" />
/// <reference path="../api-responses-document/api-responses-document.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../markdown-styles/markdown-styles.d.ts" />
/// <reference path="../marked-element/marked-element.d.ts" />

declare namespace ApiElements {

  /**
   * `api-method-documentation`
   *
   * Renders documentation for a method for an endpoint.
   *
   * This element works with [AMF](https://github.com/mulesoft/amf) data model.
   * To properly compute all the information relevant to method documentation
   * set the following properties:
   *
   * - amfModel - as AMF's WebApi data model
   * - endpoint - As AMF's EndPoint data model
   * - method - As AMF's SupportedOperation property
   *
   * When set, this will automatically populate the wiew with data.
   *
   * ## Updating API's base URI
   *
   * By default the component render the documentation as it is defined
   * in the AMF model. Sometimes, however, you may need to replace the base URI
   * of the API with something else. It is useful when the API does not
   * have base URI property defined (therefore this component render relative
   * paths instead of URIs) or when you want to manage different environments.
   *
   * To update base URI value either update `baseUri` property or use
   * `iron-meta` with key `ApiBaseUri`. First method is easier but the second
   * gives much more flexibility since it use a [monostate pattern](http://wiki.c2.com/?MonostatePattern)
   * to manage base URI property.
   *
   * When the component constructs the funal URI for the endpoint it does the following:
   * - if `baseUri` is set it uses this value as a base uri for the endpoint
   * - else if `iron-meta` with key `ApiBaseUri` exists and contains a value
   * it uses it uses this value as a base uri for the endpoint
   * - else if `amfModel` is set then it computes base uri value from main
   * model document
   * Then it concatenates computed base URI with `endpoint`'s path property.
   *
   * ### Example
   *
   * ```html
   * <iron-meta key="ApiBaseUri" value="https://domain.com"></iron-meta>
   * ```
   *
   * To update value of the `iron-meta`:
   * ```javascript
   * new Polymer.IronMeta({key: 'ApiBaseUri'}).value = 'https://other.domain';
   * ```
   *
   * Note: The element will not get notified about the change in `iron-meta`.
   * The change will be reflected whehn `amfModel` or `endpoint` property chnage.
   *
   * ## Styling
   *
   * `<api-method-documentation>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--api-method-documentation` | Mixin applied to this elment | `{}`
   */
  class apiMethodDocumentation extends Polymer.Element {

    /**
     * `raml-aware` scope property to use.
     */
    aware: string|null|undefined;

    /**
     * Generated AMF json/ld model form the API spec.
     * The element assumes the object of the first array item to be a
     * type of `"http://raml.org/vocabularies/document#Document`
     * on AMF vocabulary.
     *
     * It is only usefult for the element to resolve references.
     */
    amfModel: object|any[]|null;

    /**
     * AMF method definition as a `http://www.w3.org/ns/hydra/core#supportedOperation`
     * object.
     */
    method: object|null|undefined;

    /**
     * Method's endpoint definition as a
     * `http://raml.org/vocabularies/http#endpoint` of AMF model.
     */
    endpoint: object|null|undefined;

    /**
     * The try it button is not rendered when set.
     */
    noTryIt: boolean|null|undefined;

    /**
     * Parent endpoint name.
     * It should be either a "displayName" or endpoint's relative
     * path.
     */
    readonly parentName: string|null|undefined;

    /**
     * Computed value from the method model, name of the method.
     * It is either a `displayName` or HTTP method name
     */
    readonly methodName: string|null|undefined;

    /**
     * HTTP method name string.
     *
     * It is computed from `endpoint`.
     */
    readonly httpMethod: string|null|undefined;

    /**
     * A property to set to override AMF's model base URI information.
     * When this property is set, the `endpointUri` property is recalculated.
     */
    baseUri: string|null|undefined;

    /**
     * Endpoint URI to display in main URL field.
     * This value is computed when `amfModel`, `endpoint` or `baseUri` change.
     */
    readonly endpointUri: string|null|undefined;

    /**
     * Computed value of method description from `method` property.
     */
    readonly description: string|null|undefined;

    /**
     * Computed value from current `method`. True if the model contains
     * custom properties (annotations in RAML).
     */
    readonly hasCustomProperties: boolean|null|undefined;

    /**
     * Computed value of `http://www.w3.org/ns/hydra/core#expects`
     * of AMF model from current `method`
     */
    readonly expects: object|null|undefined;

    /**
     * Computed value of the `http://raml.org/vocabularies/http#server`
     * from `amfModel`
     */
    readonly server: object|null|undefined;

    /**
     * API base URI parameters defined in AMF api model
     */
    readonly serverVariables: any[]|null|undefined;

    /**
     * Endpoint's path parameters.
     */
    readonly endpointVariables: any[]|null|undefined;

    /**
     * Computed value if server and endpoint definition of API model has
     * defined any variables.
     */
    readonly hasPathParameters: boolean|null|undefined;

    /**
     * Computed value of method's query parameters.
     */
    readonly queryParameters: any[]|null|undefined;

    /**
     * Computed value if server definition of API model has defined
     * variables.
     */
    readonly hasQueryParameters: boolean|null|undefined;

    /**
     * Computed value, true when either has path or query parameters.
     * This renders `api-parameters-document` if true.
     */
    readonly hasParameters: boolean|null|undefined;

    /**
     * Computed value of AMF payload definition from `expects`
     * property.
     */
    readonly payload: object|null|undefined;

    /**
     * Computed value, true if `payload` has values.
     */
    readonly hasPayload: boolean|null|undefined;

    /**
     * Computed value of AMF payload definition from `expects`
     * property.
     */
    readonly headers: object|null|undefined;

    /**
     * Computed value, true if `payload` has values.
     */
    readonly hasHeaders: boolean|null|undefined;

    /**
     * Computed value of AMF response definition from `returns`
     * property.
     */
    readonly returns: object|null|undefined;

    /**
     * Computed value, true if `returns` has values.
     */
    readonly hasReturns: boolean|null|undefined;

    /**
     * Computed value of AMF security definition from `method`
     * property.
     */
    readonly security: object|null|undefined;

    /**
     * Computed value, true if `returns` has values.
     */
    readonly hasSecurity: boolean|null|undefined;

    /**
     * If set it will renders the view in the narrow layout.
     */
    narrow: boolean|null|undefined;

    /**
     * Checks if property item has a type.
     *
     * @param model Model item.
     * @param type A type to lookup
     */
    _hasType(model: object|null, type: String|null): Boolean|null;

    /**
     * Gets a signle scalar value from a model.
     *
     * @param model Amf model to extract the value from.
     * @param key Model key to search for the value
     * @returns Value for key
     */
    _getValue(model: object|null, key: String|null): any|null;

    /**
     * Computes value for `methodName` property.
     * It is either a `http://schema.org/name` or HTTP method name
     *
     * @param method AMF `supportedOperation` model
     * @returns Method friendly name
     */
    _computeMethodName(method: object|null): String|null|undefined;

    /**
     * Computes value for `httpMethod` property.
     *
     * @param method AMF `supportedOperation` model
     * @returns HTTP method name
     */
    _computeHttpMethod(method: object|null): String|null|undefined;

    /**
     * Computes method's endpoint name.
     * It looks for `http://schema.org/name` in the endpoint definition and
     * if not found it uses path as name.
     *
     * @param endpoint Endpoint model.
     * @returns Endpoint name.
     */
    _computeEndpointName(endpoint: object|null): String|null;

    /**
     * Computes endpoint's URI based on `amfModel` and `endpoint` models.
     *
     * @param server Server model of AMF API.
     * @param endpoint Endpoint model
     * @param baseUri Current value of `baseUri` property
     * @returns Endpoint's URI
     */
    _computeEndpointUri(server: object|null, endpoint: object|null, baseUri: String|null): String|null;

    /**
     * Computes base URI value from either `baseUri`, `iron-meta` with
     * `ApiBaseUri` key or `amfModel` value (in this order).
     *
     * @param baseUri Value of `baseUri` property
     * @param server AMF API model for Server.
     * @returns Base uri value. Can be empty string.
     */
    _getBaseUri(baseUri: String|null, server: object|null): String|null;

    /**
     * Computes base URI from AMF model.
     *
     * @param server AMF API model for Server.
     * @returns Base uri value if exists.
     */
    _getAmfBaseUri(server: object|null): String|null|undefined;

    /**
     * Computes value for `server` property that is later used with other computations.
     *
     * @param model AMF model for an API
     * @returns The server model
     */
    _computeServer(model: any[]|object|null): object|null;

    /**
     * Computes value of `description` property.
     *
     * @param method SupportedOperation AMF model.
     * @returns Method description if defined.
     */
    _computeMethodDescription(method: object|null): String|null|undefined;

    /**
     * Computes value for `hasCustomProperties` property.
     *
     * @param method AMF `supportedOperation` model
     */
    _computeHasCustomProperties(method: object|null): Boolean|null;

    /**
     * Computes value for the `expects` property.
     *
     * @param method AMF `supportedOperation` model
     */
    _computeExpects(method: object|null): object|null;

    /**
     * Computes value for `hasPathParameters` property
     *
     * @param sVars Current value of `serverVariables` property
     * @param eVars Current value of `endpointVariables` property
     */
    _computeHasPathParameters(sVars: any[]|null, eVars: any[]|null): Boolean|null;

    /**
     * Computes value for `queryParameters` property
     *
     * @param expects SupportedOperation expects property
     * @returns Parameetrs array
     */
    _computeQueryParameters(expects: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `hasQueryParameters` property.
     *
     * @param params List of query parameters.
     */
    _computeHasQueryParameters(params: any[]|null): Boolean|null;

    /**
     * Computes value for `hasParameters` property.
     *
     * @returns True if any argument is true
     */
    _computeHasParameters(hasPath: Boolean|null, hasQuery: Boolean|null): Boolean|null;

    /**
     * Computes value for `serverVariables` property.
     *
     * @param server AMF API model for Server.
     * @returns Variables if defined.
     */
    _computeServerVariables(server: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `endpointVariables` property.
     *
     * @param endpoint Endpoint model
     * @returns Parameters if defined.
     */
    _computeEndpointVariables(endpoint: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for the `payload` property
     *
     * @param expects Current value of `expects` property.
     * @returns Payload model if defined.
     */
    _computePayload(expects: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `hasPayload` property
     *
     * @param payload Current value of `payload` property
     */
    _computeHasPayload(payload: Array<object|null>|null): Boolean|null;

    /**
     * Computes value for the `headers` property
     *
     * @param expects Current value of `expects` property.
     * @returns Headers model if defined.
     */
    _computeHeaders(expects: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `hasHeaders` property
     *
     * @param headers Current value of `headers` property
     */
    _computeHasHeaders(headers: Array<object|null>|null): Boolean|null;

    /**
     * Computes value for `returns` property
     *
     * @param method AMF `supportedOperation` model
     */
    _computeReturns(method: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `hasReturns` property.
     *
     * @param returns Current value of `returns` property
     */
    _computeHasReturns(returns: Array<object|null>|null): Boolean|null;

    /**
     * Computes value for `security` property
     *
     * @param method AMF `supportedOperation` model
     */
    _computeSecurity(method: object|null): Array<object|null>|null|undefined;

    /**
     * Computes value for `hasSecurity` property.
     *
     * @param security Current value of `security` property
     */
    _computeHasSecurity(security: Array<object|null>|null): Boolean|null;

    /**
     * "Try it" button click handler. Dispatches `tryit-requested` custom event
     */
    _tryIt(): void;
  }
}

interface HTMLElementTagNameMap {
  "api-method-documentation": ApiElements.apiMethodDocumentation;
}
