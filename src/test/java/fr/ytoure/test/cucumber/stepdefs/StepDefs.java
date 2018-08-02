package fr.ytoure.test.cucumber.stepdefs;

import fr.ytoure.test.TestApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = TestApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
