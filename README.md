# FilterScout 
(working title) 

[Trigger warning: we're discussing abuse and harassment.]

## Summary

A browser extension that allows a user to set rules for content display, muting unwanted content on the Web, including social media websites. Twitter, Facebook, Reddit, newspapers, and blogs can be filtered.  

We are Jonathan Eyler-Werve and a few collaborators in the mental health and software engineering fields.

CONTACT: Jonathan@eylerwerve.com 

WEBSITE: http://CivicWorkbench.com 

## Problem we're solving

Unwanted content online takes many forms. This tool allows users to suppress content based on rules they set, mitigating some of the harm caused by... 

- Background-noise hostility from people on the web, such as that routinely sent to women and people of color. 
- Specific triggers which could be helpful public discourse, but unwanted to some people sometimes, such as trauma survivors muting triggers.  
- People undergoing pile-on harassment, who need to communicate to gather support or just exist online. 

## How it might work 

I open Chrome over breakfast to read the news. Because it's before 9am, my rules are set to their tightest profile. As Twitter opens, the extension uses a mix of opt-in rulesets and custom terms to scan for trigger words (including "trigger warning" and "TW", but also a variety of slurs and abuse). When a tweet's text matches a rule, it applies the filter I set. In this case, one of my mentions contains a trigger term, and since I'm locked down (breakfast time!) it removes the entire tweet silently. In looser settings, it covers the tweet with a trigger warning which can be removed with a click, or displays the tweet greyed out and without images, per user preferences. 

## Why this works

- Technically: the Web is delivered as a text document and assembled by the browser. The browser can make choices about what is displayed. 
- We don't need permission from platform providers to selectively remove or wrap content that would otherwise be included in a page.
- Platform providers approach the problem of "garbage" like a government: one rule for every user. We're approaching it as a product: give the user control over what they see. This allows more far more proactive filtering and sidesteps "censorship/freedom" conversations. 
- These filters do not leak information back to abusers. Difficult for a sender to know if a tweet or message has been displayed.  

## Limits of this approach 

- Language is a contested space. Terms like queer or Negro can be affirming or derogatory. Humans constantly adapt to shifting audiences and settings. Software struggles to detect these signals. 
- Regex-based filtering for specific trigger words or phrases is the most basic and limited form of content analysis. 
- Filtering content is easier than filtering behavior, but behavior is more impactful. A hostile user can send a threatenting message ("I'll meet you at your office") which passes any content filter.  
- Mobile apps work differently than browsers; to work on mobile, User would need to switch to the mobile web version of Twitter, etc. which is usually full featured but slower. 
- We have an idea of what [effective community moderation](https://coralproject.net/advice-for-the-accidental-community-manager/) looks like, and filtering isn't it. This tool is not attempting to examine root causes, build empathy-enabling platforms, or reconcile warring factions. This tool exists to mitigate one vector for abuse so that people can continue to engage with communities and (we hope) build communities where abuse isn't normal. 

## More sophisticated approaches 

The "bad words" model of filtering is a small first step. Future options include... 

#### Improve and share rulesets 

- User-created custom rules can be shared back to a central service (opt-in!) creating a dataset to improve default rulesets.
- Users can publish and maintain rulesets which push filter updates to subscribed users. 

#### Filter for behavior

- Repetitive actions can be a form of denial of service ("spam spammity spam spam"). 
- Sending a single @ mention saying "I disagree" is benign; sending 30 mentions is not. These can detected and compacted into a single notification. 

#### Enable machine learning 

- In the course of using the tool, a swarm of users can report data (opt-in!) to a central service on the content that correctly activates triggers, false positives and false negatives, allowing for error detection and refinement.  
- Hardcore hate speech is deeply weird, using atypical spelling and word choice. This creates language patterns that are detectable at scale with more sophistication than simple "bad word" analysis. Garbage pits like Voat.co create easily scraped "positive" corpus to compare against "negatives" provided by well-moderated forums. 

#### Understand identity and reputation. 

- Platforms with persistent identities can be observed by a service, which provides reputation scores. Reputation scores allow historic content and behavior to trigger filter rules.
- A user account which is less than a week old can be treated differently than one with 1000+ followers. 
- A swarm of extension users can report back to a central service (opt-in!) about which user accounts publish content which activates triggers, allowing users access to a (per topic) reputation score for the user. 
- Care must be taken to defend against hijacking of reputation systems. A variety of counter strategies exist, and can be anchored by human moderators. 
 
#### Contributor mode 

- Users who are not content-filtering for a topic can flag this content on behalf of others. Communities with similar reading habits can support each other. 
- Cataloging and reporting online abuse may provide a positive outlet to a negative event: by flagging a user or page, it might minimize the relationship with the abuser and recenter the relationship with friends and allies. 
- A swarm of readers can read ahead to enable more proactive warnings across the entire web (ex: highlighting outbound links with rich trigger warnings).
- Strategies exist to detect malicious use of user-submitted reporting.
