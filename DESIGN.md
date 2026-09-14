---
name: Smith Onyekwereh portfolio
description: AI Operations and filmmaking with generous whitespace and restrained glass controls.
colors:
  green: "#185541"
  green-hover: "#103e2e"
  ink: "#172421"
  muted: "#56625d"
  mint: "#e9f2ec"
  paper: "#fafbf9"
  line: "#d9e0db"
  white: "white"
  stage: "#e4eee7"
  workspace: "#eef0ed"
  research: "#f0f1ed"
  cinema: "#101713"
  cinema-text: "#f6f8f5"
  cinema-muted: "#b9c6be"
  focus: "#498564"
  glass: "rgba(255,255,255,.91)"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(40px,5vw,70px)"
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(34px,4vw,54px)"
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: "-.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: "-.035em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
rounded:
  field: "4px"
  button: "8px"
  media: "10px"
  surface: "12px"
  navigation: "14px"
  stage: "16px"
  tool: "30px"
spacing:
  compact: "8px"
  control: "12px"
  mobile-inset: "18px"
  inset: "20px"
  generous: "28px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "12px 19px"
  button-primary-hover:
    backgroundColor: "{colors.green-hover}"
  button-reset:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
  navigation:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.navigation}"
    padding: "12px 20px"
  tool:
    backgroundColor: "#eef0ec"
    rounded: "{rounded.tool}"
    padding: "7px 12px"
  sample-card:
    backgroundColor: "{colors.mint}"
    rounded: "{rounded.surface}"
    padding: "25px 20px"
  review-field:
    rounded: "{rounded.field}"
    padding: "8px"
    height: "65px"
    width: "100%"
---

# Design System: Smith Onyekwereh portfolio

## Overview

**Creative North Star: "Evidence before biography"**

The approved direction combines whitespace, ink, pale mint, forest controls and dark cinema. Manrope, short captions and real work imagery give the interface a clear, approachable character.

Restrained glass belongs to navigation. Functional specimens, paper and media retain their own material character, with motion that responds to interaction and respects reduced-motion preferences. This documents the implemented local preview in preview.html, preview.css and preview.js; it does not redefine the existing live homepage.

**Key Characteristics:**

- Generous whitespace and short copy.
- Restrained glass controls.
- Distinct operations, research and film environments.
- Real media and keyboard-visible interaction.

## Colors

Forest green provides the primary action accent; warm, lightly green neutrals support the work without competing with it.

### Primary

Green identifies primary actions and demo feedback. Green-hover deepens the same control on hover. Mint supports the small work specimen and evidence containers; stage provides the broader operations surround.

### Neutral

Paper is the page canvas. Ink is the primary text and navigation action color; muted is secondary text. White supplies working surfaces. Line separates records. Workspace and research distinguish quieter supporting environments. Cinema, cinema-text and cinema-muted form the dark film environment. Glass is the translucent navigation surface; focus is the general keyboard indicator.

## Typography

Manrope serves display, body and labels, with Arial and sans-serif fallbacks. Local regular and bold font files use swap loading. The hierarchy is size-led, with tight headings and relaxed body text; no separate decorative or mono family is introduced.

The frontmatter records the default heading hierarchy. The mobile hero uses a fixed display size (43px). Case titles use their own responsive range (36–64px). Body copy is constrained to readable measures (66ch by default); the hero is shorter (36ch). Metadata and sample labels use the label role. The live amount uses tabular numerals and a larger size (43px desktop, 36px mobile).

## Layout

The main content caps at (1220px), with desktop viewport subtraction (80px). At the middle breakpoint (950px), subtraction becomes (48px); at mobile (680px), it becomes (36px). The navigation has its own wider gutter treatment and stays sticky.

Desktop combines asymmetric hero and operations grids with two-column supporting sections. Mobile stacks the hero, demo, research and biography, while the two portrait films remain beside each other below a full-width trailer. The mobile trailer keeps a (16:9) aspect ratio. Section spacing is generous, commonly (85–100px) on desktop and (60px) on mobile. Wide desktop increases hero breathing room from (1500px).

## Elevation & Depth

The system combines tonal stages with soft, localized shadows. The navigation uses backdrop blur (18px), with an opaque fallback for reduced transparency. Work samples and paper lift slightly above their stage; repeated content does not need a shadowed card.

Shadow vocabulary, motion, breakpoints and focus details live in the sidecar. The small work and film specimens straighten on hover; the paper sheet does the same. The linked amount briefly rises and changes color on update. Supporting browsers reveal the film deck through a view-timeline aperture. Reduced-motion mode removes transitions, animation and specimen rotation.

## Shapes

Controls have gently curved corners; larger working surfaces use the surface radius. Film frames use the media radius. Paper is nearly square (2px), identity imagery is circular, and tool badges use a pill silhouette. Thin record dividers structure dense information without boxing every row.

## Components

### Buttons

Primary actions use forest green, white text, bold small type (13px) and a minimum height (46px). Hover deepens the green. Reset is a quiet underlined action with a minimum height (44px). Disabled buttons reduce opacity (.58) and use the default cursor. General keyboard focus uses a solid ring (3px) with offset (5px).

### Navigation

The sticky glass bar combines a bold wordmark with compact text links and an ink contact button. Link targets have a minimum height (44px); hovering underlines navigation text. On mobile, links wrap into a second row.

### Working surfaces and tags

The white demo shell sits within a pale operations stage. Record rows are divided by thin rules; sample identity is visually explicit. The workspace uses compact brand buttons with a white selected state exposed through aria-pressed. Tool badges are static text pills, not filters.

### Film control

A full-frame button overlays each poster with a lower dark gradient, title and circular Play marker. Focus stays inside the clipped frame: a white ring (3px), inset offset (-6px), and ink backing (9px inset shadow). Activation replaces the poster with native video controls, and starting another film pauses the previous one. Media failure offers a retry action.

### Review field

The local review panel contains a bordered textarea and small action buttons. It is preview tooling, not a public contact form. Notes and decisions remain local. The textarea uses the line color and general keyboard focus treatment.

## Do's and Don'ts

- Do use generous whitespace and short captions.
- Do keep keyboard focus visible inside clipped media.
- Do preserve reduced-motion and reduced-transparency support.
- Do use actual work imagery with clear provenance.
- Don't substitute decorative illustrations or stock scenes for approved work.
- Don't turn every content block into a repeated bordered card.
- Don't present local demo or review controls as live business systems.
