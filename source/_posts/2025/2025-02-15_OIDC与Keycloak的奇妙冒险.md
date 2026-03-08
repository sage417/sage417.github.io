---
title: 'OIDC与Keycloak的奇妙冒险'
date: '2025-02-15 00:00:00'
cover: 
toc: true
categories:
    - 工作
    - 中间件
---

## KeyCloak Client scopes

Client scopes 的Assigned type 有两个可选项:
- Default - 不需要client指定scope name,默认返回scope值
- Optional -  与Default相反，需要client指定scope name才返回指定scope值

`
client中的client scopes的创建时会引用realm配置，需要留意点在于Assigned type字段可以在client层级单独设置，创建时从realm层级继承，修改时与realm层级互相独立
`

Client scopse 的Include in token scope 也有两个可选项：
- On - 返回scope值时，client scope中添加该scope name
- Off - 返回scope值时，client scope中隐藏该scope name

## 验证 Signature verify

springboot oauth resource server中，配置`spring.security.oauth2.resourceserver.jwt.jwk-set-uri`可以通过公钥校验jwt签名, 这里框架没有打印日志，只能通过代码调试验证

``` java
org.springframework.security.oauth2.jwt.NimbusJwtDecoder#createJwt

		try {
			// Verify the signature
			JWTClaimsSet jwtClaimsSet = this.jwtProcessor.process(parsedJwt, null);
			Map<String, Object> headers = new LinkedHashMap<>(parsedJwt.getHeader().toJSONObject());
			Map<String, Object> claims = this.claimSetConverter.convert(jwtClaimsSet.getClaims());
			// @formatter:off
			return Jwt.withTokenValue(token)
					.headers((h) -> h.putAll(headers))
					.claims((c) -> c.putAll(claims))
					.build();
			// @formatter:on
		}
```

对于apisix网关，需要配置`openid-connect`插件对Signature校验
``` json
        {
            "openid-connect": {
            "client_id": "client_id",
            "client_secret": "client_secret",
            "discovery": "https://keycloak.pooi.app/realms/pooi/.well-known/openid-configuration",
            "bearer_only": true,
            "ssl_verify": true,
            "scope": "openid",
            "use_jwks": true
            }
        }
```