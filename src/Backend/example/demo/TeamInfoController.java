package Backend.example.demo;

import org.springframework.web.bind.annotation.GettMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamInfoController {
    @GetMapping("/team/{teamId}")
    public TeamInfo getTeamInfo(@PathVariable String teamId) {

    }
}