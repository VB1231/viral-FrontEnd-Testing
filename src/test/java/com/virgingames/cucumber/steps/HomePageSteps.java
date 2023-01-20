package com.virgingames.cucumber.steps;

import com.virgingames.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class HomePageSteps {
    @Given("^I have to accept cookies$")
    public void iHaveToAcceptCookies() {
    }

    @Then("^I can see virgin game homepage$")
    public void iCanSeeVirginGameHomepage() {
        new HomePage().clickOnAcceptCookie();
    }

    @Given("^I have to click on OnlineSlot$")
    public void iHaveToClickOnOnlineSlot() {
    }

    @When("^I click on OnlineSlot$")
    public void iClickOnOnlineSlot() {
        new HomePage().clickOnOnlineSlots();
    }

    @Then("^I can see message \"([^\"]*)\"$")
    public void iCanSeeMessage(String msg)  {
        Assert.assertEquals("not verify",new HomePage().verifyMessage(),msg);

    }
}
