package app.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class PageController {
    @RequestMapping(value = "/page", method = RequestMethod.GET)
    public String home() {
        return "index.html";
    }
}
