"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[9652],{7110:function(e,o,n){n.r(o),n.d(o,{_frontmatter:function(){return m},default:function(){return u}});var t,a=n(87462),i=n(63366),l=(n(15007),n(64983)),r=n(91515),s=["components"],m={},d=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),c={_frontmatter:m},p=r.Z;function u(e){var o=e.components,n=(0,i.Z)(e,s);return(0,l.mdx)(p,(0,a.Z)({},c,n,{components:o,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"domain-layer"},"Domain layer"),(0,l.mdx)("p",null,"The domain layer holds the business logic layer of a ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module"),". It typically does not contain resource-specific or database-specific information. Its primary functions include:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Defining the generic data objects, or models, that contain business logic. This logic defines which operations can be performed on particular types of data, such as a Customer object. These models contain generic information only. Applications can also use SOAP or RESTful endpoints to request data from models.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"(Optionally) Including the implementation of service contracts, although not their definition."))),(0,l.mdx)(d,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Best practice:")," Use service contracts to communicate with the domain layer by passing data types through strongly typed objects. This helps you avoid the need to replace presentation layer code when replacing business layer logic."),(0,l.mdx)("h2",{id:"models"},"Models"),(0,l.mdx)("p",null,"Each domain-layer model contains a reference to a resource model, which it uses to retrieve data from the database with MySql calls. This resource model contains logic for connecting to the underlying database, typically MySQL. A model requires a resource model only if the model data must persist."),(0,l.mdx)("h2",{id:"accessing-the-domain-layer"},"Accessing the domain layer"),(0,l.mdx)("p",null,"There are three primary ways of accessing a module's domain-layer code:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Service contracts are the recommended way for one module to access another module's domain-level code. This loosely coupled solution is the optimal way for most modules to access another module.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"A module can directly call into another module. This tightly coupled solution is not recommended for most situations, but is sometimes unavoidable.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Domain layer code in one module can also plug itself into another module by:"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"event hooks")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"plugins")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"di.xml")," files (with an SPI contract)"))))),(0,l.mdx)("p",null,"Your strategy for calling another module's domain-layer code is highly dependent upon the unique configuration and needs of your system."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-layers-domain-md-d6351fcb949323aeafda.js.map