---
title: Button
info: Buttons are clickable items used to perform an action.
---

## Usage

Buttons should be used in situations where users might need to:

* submit a form
* begin a new task
* trigger a new UI element to appear on the page
* specify a new or next step in a process

{% include pattern_block.html url='/src/patterns/components/button/link_button.html' %}

{% include pattern_block.html url='/src/patterns/components/button/neutral_button.html' %}

{% include pattern_block.html url='/src/patterns/components/button/outline_button.html' %}

Link, Neutral, and Outline Primary buttons can be used multiple times per feature. Use these buttons when the actions are of equal or secondary importance to the content surrounding it.

{% include pattern_block.html url='/src/patterns/components/button/primary_button.html' %}

The Primary button generally should only be used once per component screen at any one time. It is used for when there is an action that is clearly more important than the other actions and you need to draw attention to it. An example is when you have a “Save” and “Cancel” button. The “Save” is the primary action.

Not all features need to have primary actions, sometimes the actions are secondary to the content and are all of equal importance.

Outline and Link buttons are used most frequently and can be used multiple times per feature. Use these buttons when the actions are of equal or secondary importance to the content surrounding it.

{% include pattern_block.html url='/src/patterns/components/button/block_button.html' %}

Use block buttons on small self-service containers (eg. 'Sign in').

{% include pattern_block.html url='/src/patterns/components/button/inverse_button.html' %}

Use the inverse button on dark backgrounds.

{% include pattern_block.html url='/src/patterns/components/button/destructive_button.html' %}

This button is used to indicate a destructive action to the user, like permanently erasing data.

{% include pattern_block.html url='/src/patterns/components/button/text_destructive_button.html' %}

This button is used to indicate a destructive action to the user, like permanently erasing data. Use this version when the Destructive button would be too distracting to the experience.

{% include pattern_block.html url='/src/patterns/components/button/disabled_button.html' %}

{% include pattern_block.html url='/src/patterns/components/button/icon_button.html' %}

Use icon buttons to reinforce button action (eg. '+ New')
