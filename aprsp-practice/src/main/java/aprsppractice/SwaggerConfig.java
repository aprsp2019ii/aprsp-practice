package aprsppractice;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	public static final Contact DEFAULT_CONTACT = new Contact("Miroslav Stefanovic", "https://github.com/MiroslavStefanovic", "mstef@uns.ac.rs");
	public static final ApiInfo DEFAULT_API_INFO = new ApiInfo("APRSP backend", "APRSP", "1.0", "",
	          DEFAULT_CONTACT, "", "");
	
	@Bean
	public Docket api() {
		//return new Docket(DocumentationType.SWAGGER_2);
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(DEFAULT_API_INFO);
	}

}