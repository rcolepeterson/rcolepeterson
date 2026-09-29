import { NextPage } from "next";
import { Metadata } from "next";
import clsx from "clsx";
import Logo from "../../components/Logo";
import Link from "next/link";

const LIVE_URL = "https://the-lost-matches.vercel.app/";

export const metadata: Metadata = {
  title: "The Lost Matches — R. Cole Peterson",
  description:
    "Reconstructing sports history without pretending the record is complete — a case study on designing AI products for trust and uncertainty.",
  openGraph: {
    title: "The Lost Matches — R. Cole Peterson",
    description:
      "Reconstructing sports history without pretending the record is complete — a case study on designing AI products for trust and uncertainty.",
    url: "https://rcolepeterson.com/independent/the-lost-matches",
  },
};

const headerStyle =
  "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl";
const titleStyle =
  "max-w-3xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl";
const subHeadingStyle = "text-2xl font-bold mt-2 mb-2";
const pStyle = "max-w-3xl text-gray-600 md:text-lg lg:text-xl";
const listStyle =
  "max-w-3xl list-disc space-y-2 pl-5 text-gray-600 md:text-lg lg:text-xl";

const TheLostMatchesPage: NextPage = () => {
  return (
    <section>
      <div className="bg-white pt-2 md:py-16 px-4">
        <div className="mx-auto max-w-screen-xl">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 px-4">
        <div className="mx-auto max-w-screen-xl py-16">
          <article>
            <h1 className={titleStyle}>The Lost Matches</h1>
            <p className={pStyle}>
              Reconstructing sports history without pretending the record is
              complete
            </p>
            <p className="mt-6 text-sm text-gray-500">R. Cole Peterson</p>
            <p className="text-sm text-gray-500">
              rcolepeterson.com · rcolepeterson@gmail.com
            </p>
            <Link
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 bg-primary font-bold leading-none text-black inline-flex items-center justify-center border-transparent"
            >
              View the working prototype
            </Link>

            <h2 className={clsx(headerStyle, "mt-12")}>The idea</h2>
            <p className={pStyle}>
              The Lost Matches is a web experience for reconstructing
              historic sporting events that were never fully captured on
              film.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              Instead of presenting a seamless documentary, it assembles the
              surviving fragments: official footage, fan photos, ticket
              stubs, audio, written memories, and editorial context. Visitors
              move through a chronological timeline, seeing both what has
              been recovered and what remains missing.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              That incompleteness is visible by design. Every event carries a
              restored percentage, making it clear that the experience is a
              reconstruction—not a definitive record.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The current prototype includes:
            </p>
            <ul className={clsx(listStyle, "mt-2")}>
              <li>
                <strong>The Battle of the Sexes (1973):</strong> a fuller
                demonstration of the timeline and content system.
              </li>
              <li>
                <strong>Miracle on Ice (1980):</strong> a second event
                showing how the format translates to another sport.
              </li>
              <li>
                <strong>Thrilla in Manila (1975):</strong> a locked
                &ldquo;coming soon&rdquo; entry that signals how the platform
                could expand without overbuilding the prototype.
              </li>
            </ul>

            <h2 className={clsx(headerStyle, "mt-12")}>
              Where the project came from
            </h2>
            <p className={pStyle}>
              This was not a brand-new idea. My team first pitched an earlier
              version to the BBC roughly four or five years ago, then
              explored it again around a potential tennis opportunity two or
              three years later. Neither moved forward.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              I still thought the underlying product question was worth
              exploring, so I rebuilt the concept independently last week as
              a working prototype.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The current version is entirely hardcoded. There is no
              database, live contribution system, user authentication, or
              moderation workflow behind it yet. That was intentional: the
              goal was to make the idea tangible enough to test the
              experience and expose the harder product questions before
              investing in infrastructure.
            </p>

            <h2 className={clsx(headerStyle, "mt-12")}>
              The real opportunity
            </h2>
            <p className={pStyle}>
              I do not see a large, obvious standalone consumer market for
              this in its current form, and I do not want to manufacture one
              for the sake of a case study.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The more credible opportunity is as a feature or editorial
              format inside an existing sports, broadcast, archive, museum,
              or rights-holder platform—somewhere that already has an
              audience, historical material, and a reason to deepen
              engagement with its archive.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The underlying problem is real but specific:
            </p>
            <ul className={clsx(listStyle, "mt-2")}>
              <li>Important events often survive as incomplete records.</li>
              <li>
                Valuable context remains scattered across official archives
                and personal collections.
              </li>
              <li>
                The people holding firsthand memories will not be available
                forever.
              </li>
              <li>
                Most archive experiences are built to publish finished
                material, not to collect and reconcile fragments over time.
              </li>
            </ul>
            <p className={clsx(pStyle, "mt-4")}>
              The Lost Matches asks whether an incomplete archive can still
              be compelling—provided the product is honest about what it
              knows, what it does not know, and where each contribution came
              from.
            </p>

            <h2 className={clsx(headerStyle, "mt-12")}>
              What AI accelerated—and what it did not
            </h2>
            <p className={pStyle}>
              AI made it faster to turn the concept into a functioning
              interface. It did not remove the need for product judgment,
              editorial scrutiny, or quality control.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The most revealing problems were not dramatic engineering
              failures. They were small moments where the generated version
              technically worked but was still wrong.
            </p>

            <h3 className={subHeadingStyle}>
              A blurry image that was not a CSS problem
            </h3>
            <p className={pStyle}>
              The hero image looked soft regardless of how I adjusted the
              blur treatment. The problem was upstream: the source image was
              only 702 × 860 pixels and was being stretched across a
              full-screen container. No CSS adjustment could restore detail
              that did not exist.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The lesson was simple: inspect the input before continuing to
              tune the output.
            </p>

            <h3 className={subHeadingStyle}>
              A &ldquo;Written Memory&rdquo; card that was not a memory
            </h3>
            <p className={pStyle}>
              One timeline card was labeled and styled as a personal
              recollection, but the copy was actually platform-written
              editorial context. Nothing was technically broken. The page
              rendered correctly.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              But the design borrowed the emotional credibility of a real
              eyewitness for content that had no eyewitness behind it. That
              made a content-model problem look like a visual-design
              problem—and created a subtle trust failure.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The fix was to reserve first-person treatments for genuine
              first-person material and give editorial narration its own
              clearly labeled presentation.
            </p>

            <h3 className={subHeadingStyle}>
              A video interaction with two meanings
            </h3>
            <p className={pStyle}>
              A timeline card included both a play control and a separate
              &ldquo;Watch on YouTube&rdquo; action. One kept the visitor
              inside the experience; the other sent them to another
              platform. The distinction was not clear enough.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              Again, the feature worked. The issue was whether the
              interaction communicated its consequence before the user
              clicked.
            </p>

            <p className={clsx(pStyle, "mt-4")}>
              None of these problems was difficult to fix once identified.
              The real work was noticing them instead of accepting
              &ldquo;it renders&rdquo; as evidence that the experience was
              right.
            </p>

            <h2 className={clsx(headerStyle, "mt-12")}>
              Key product decisions
            </h2>

            <h3 className={subHeadingStyle}>
              Show uncertainty instead of hiding it
            </h3>
            <p className={pStyle}>
              Each match displays a restored percentage rather than
              presenting the reconstruction as complete. The number makes
              uncertainty part of the interface, not something buried in a
              disclaimer.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              In a production system, that percentage would need a
              transparent methodology. In this prototype, it establishes the
              intended product behavior: missing evidence should remain
              visible rather than being silently filled with generated
              content or presented as fact.
            </p>

            <h3 className={subHeadingStyle}>
              Keep provenance close to the content
            </h3>
            <p className={pStyle}>
              The timeline distinguishes official footage, fan material,
              written memories, and platform context where they appear. The
              source is part of the experience because the meaning of a
              fragment depends on who supplied it and what kind of evidence
              it is.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              A polished interface should not flatten those distinctions.
            </p>

            <h3 className={subHeadingStyle}>
              Reserve emotional design language for real voices
            </h3>
            <p className={pStyle}>
              Pull quotes, quotation marks, and first-person framing create
              intimacy and credibility. I treated those choices as part of
              the trust model, not decoration.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              Personal visual language belongs to genuine personal
              testimony. Editorial context needs to look and sound
              editorial.
            </p>

            <h3 className={subHeadingStyle}>
              Demonstrate scale without overbuilding
            </h3>
            <p className={pStyle}>
              I chose to build two event pages and show a third as
              &ldquo;coming soon.&rdquo; Fully populating every event would
              have spread the work across several shallow examples. Removing
              the third would have weakened the signal that the system could
              apply across sports.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The right scope was determined by the purpose of the artifact:
              demonstrate a repeatable format, not imitate a finished
              content library.
            </p>

            <h3 className={subHeadingStyle}>Design for graceful failure</h3>
            <p className={pStyle}>
              External media will eventually disappear, embeds will break,
              and contributed files will vary in quality. The prototype uses
              styled fallback states rather than leaving dead frames in the
              timeline.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              A reconstruction platform should remain understandable even
              when one piece of evidence is unavailable.
            </p>

            <h3 className={subHeadingStyle}>
              Use one deliberate &ldquo;wow&rdquo; moment
            </h3>
            <p className={pStyle}>
              As visitors scroll, the full-screen background changes to
              reflect the timeline moment currently in view. One moment can
              use looping video rather than a static image.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              That interaction gives the archive a sense of presence without
              requiring every entry to become an expensive cinematic
              sequence. The effect supports the story rather than becoming
              the story.
            </p>

            <h2 className={clsx(headerStyle, "mt-12")}>
              Trust and uncertainty: what exists now
            </h2>
            <p className={pStyle}>The prototype currently demonstrates:</p>
            <ul className={clsx(listStyle, "mt-2")}>
              <li>
                A visible completeness indicator instead of a false sense of
                &ldquo;finished.&rdquo;
              </li>
              <li>
                Clear separation between official material, contributed
                material, and platform narration.
              </li>
              <li>
                Source and contributor labels attached to timeline
                fragments.
              </li>
              <li>Graceful fallbacks when external media is unavailable.</li>
              <li>
                A corrected visual-language rule so editorial context does
                not masquerade as personal testimony.
              </li>
            </ul>
            <p className={clsx(pStyle, "mt-4")}>
              These are useful foundations, but they are not yet a complete
              trust system.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The prototype does not currently handle:
            </p>
            <ul className={clsx(listStyle, "mt-2")}>
              <li>
                Two contributors giving conflicting accounts of the same
                moment.
              </li>
              <li>
                Claim-level states such as confirmed, disputed, unverified,
                or unknown.
              </li>
              <li>
                Corrections when published information later proves
                inaccurate.
              </li>
              <li>
                A transparent method for calculating archive completeness.
              </li>
              <li>Contributor identity, reputation, or corroboration.</li>
              <li>
                Rights, consent, and reuse permissions for submitted media.
              </li>
            </ul>
            <p className={clsx(pStyle, "mt-4")}>
              That gap is the most interesting part of the concept. The
              difficult question is not simply, &ldquo;Can people
              contribute?&rdquo; It is:{" "}
              <em>
                Can the system remain useful and honest when evidence is
                incomplete and contributors disagree?
              </em>
            </p>

            <h2 className={clsx(headerStyle, "mt-12")}>
              What I would build next
            </h2>

            <h3 className={subHeadingStyle}>1. A real evidence model</h3>
            <p className={pStyle}>
              Move the hardcoded content into a database where each fragment
              has a source, owner, timestamp, rights status, evidence type,
              and verification state. Claims and media should be related
              without being treated as the same thing.
            </p>

            <h3 className={subHeadingStyle}>
              2. Accounts and contribution flows
            </h3>
            <p className={pStyle}>
              Allow people to submit memories and media under a persistent
              identity, explain what they know firsthand, and provide enough
              provenance for moderators to assess the contribution.
            </p>

            <h3 className={subHeadingStyle}>3. A moderation queue</h3>
            <p className={pStyle}>
              Nothing contributed should go directly onto the public record.
              Reviewers need tools to inspect sources, request
              clarification, check rights, and approve, reject, or hold
              material.
            </p>

            <h3 className={subHeadingStyle}>4. A dispute model</h3>
            <p className={pStyle}>
              When accounts conflict, the system should preserve the
              disagreement rather than select a convenient version or merge
              incompatible details into false certainty. Competing accounts
              can coexist if their status and sourcing are clear.
            </p>

            <h3 className={subHeadingStyle}>5. Visible corroboration</h3>
            <p className={pStyle}>
              Visitors should be able to see when a claim is supported by
              multiple independent contributions, an official record, or
              both. Trust should be inspectable rather than implied by
              confident copy.
            </p>

            <h3 className={subHeadingStyle}>
              6. A defensible completeness score
            </h3>
            <p className={pStyle}>
              The restored percentage needs rules: what counts as a timeline
              moment, how different evidence types are weighted, and what
              changes when material is disputed or removed. Without that
              explanation, the number is useful as a concept but not yet
              authoritative.
            </p>

            <h2 className={clsx(headerStyle, "mt-12")}>Outcome</h2>
            <p className={pStyle}>
              The earlier BBC pitch and later tennis-related opportunity did
              not become projects. This independent rebuild is the first
              time I have turned the idea into a working, publicly
              accessible product experience on my own terms.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The outcome is not a launched business. It is a tangible
              artifact that makes the opportunity—and its unresolved
              questions—specific enough to evaluate.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              It demonstrates how I approach AI product work:
            </p>
            <ul className={clsx(listStyle, "mt-2")}>
              <li>
                Build the smallest credible version that makes the idea
                testable.
              </li>
              <li>Treat uncertainty and provenance as interface decisions.</li>
              <li>
                Review generated output for meaning, not just functionality.
              </li>
              <li>
                Be explicit about what is real, simulated, incomplete, or
                not built yet.
              </li>
              <li>
                Use the prototype to discover the next product questions
                instead of pretending they have already been solved.
              </li>
            </ul>

            <h2 className={clsx(headerStyle, "mt-12")}>Takeaway</h2>
            <p className={pStyle}>
              AI dramatically shortened the distance between an old idea and
              a working prototype. But speed was not the most important part
              of the exercise.
            </p>
            <p className={clsx(pStyle, "mt-4")}>
              The value came from deciding what the product should claim,
              where it should show doubt, how it should distinguish evidence
              from narration, and when the right move was to stop building.
            </p>
            <p className={clsx(pStyle, "mt-4 font-bold text-black")}>
              The prototype proves the experience. The unresolved trust
              model defines the real product.
            </p>
          </article>

          <Link href="/">
            <div className="text-2xl flex items-center py-8 gap-x-2 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              BACK
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TheLostMatchesPage;
