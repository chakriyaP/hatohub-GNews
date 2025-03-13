import axios from "axios";

const API_KEY = process.env.REACT_APP_GNEWS_API_KEY; // Ensure this is set in your environment
const BASE_URL = "https://gnews.io/api/v4";

interface Source {
  name: string;
  url: string;
}

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: Source;
}

interface NewsApiResponse {
  totalArticles: number;
  articles: Article[];
}
//52f9e2981d57d2dc23b817f8a0fbe49e
// export const fetchNewsSorted = async (query?: string): Promise<Article[]> => {
//   try {
//     const response = await axios.get<NewsApiResponse>(`${BASE_URL}/search`, {
//       params: {
//         q: "new",
//         sortby: "publishedAt",
//         token: "52f9e2981d57d2dc23b817f8a0fbe49e",
//       },
//     });

//     return response.data.articles;
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     return [];
//   }
// };

// //52f9e2981d57d2dc23b817f8a0fbe49e
// 8f0d30da8e939a4422a1b417905f83c3 Kim
export const fetchNews = async (params: {
  searchQuery?: string;
  category?: string | null;
  from?: string | null;
  to?: string | null;
  sortBy?: "asc" | "desc";
  languageKey?: string;
}): Promise<Article[]> => {
  try {
    // const response = await axios.get<NewsApiResponse>(
    //   `${BASE_URL}/top-headlines`,
    //   {
    //     params: {
    //       q: params.searchQuery || "",
    //       category: params.category || "",
    //       from: params.from || undefined,
    //       to: params.to || undefined,
    //       sortBy: params.sortBy || "desc",
    //       max: 10,
    //       lang: params.languageKey || "",
    //       token: "8f0d30da8e939a4422a1b417905f83c3",
    //     },
    //   }
    // );

    const response = {
      totalArticles: 115669,
      articles: [
        {
          title:
            "2025 NFL free agency Day 3 winners and losers: Evan Engram boosts Broncos; Steelers waiting on Aaron Rodgers?",
          description: "A look a which teams are making waves in free agency",
          content:
            "Happy new league year to you and yours! At 4 p.m. ET on Wednesday, the NFL rung in the new league year, which means all the deals that were agreed in principle over the course of the last few days during the legal negotiating period can now become of... [3537 chars]",
          url: "https://www.cbssports.com/nfl/news/2025-nfl-free-agency-day-3-winners-and-losers-evan-engram-boosts-broncos-steelers-waiting-on-aaron-rodgers/",
          image:
            "https://sportshub.cbsistatic.com/i/r/2025/03/12/c4dc8d70-a257-47cc-bca5-69e9172cd9dd/thumbnail/1200x675/c5f40d72f66cb7cc143f1dfd7c8812ea/engram-g.jpg",
          publishedAt: "2025-03-13T06:12:00Z",
          source: {
            name: "CBS Sports",
            url: "https://www.cbssports.com",
          },
        },
        {
          title:
            "Asian shares decline despite rebound on Wall St as investors await next steps in trade wars",
          description:
            "Asian shares are mostly lower despite a rebound on Wall Street fueled by an encouraging inflation update.",
          content:
            "BANGKOK (AP) — Asian shares were mostly lower on Thursday despite a rebound on Wall Street fueled by an encouraging update on U.S. consumer prices.\nU.S. futures fell and oil prices were little changed.\nChinese markets slipped as investors watched for... [4149 chars]",
          url: "https://apnews.com/article/stocks-markets-rates-tariffs-1c8e59d6f2661c6e3c6aeda8ab07a583",
          image:
            "https://dims.apnews.com/dims4/default/f6fec69/2147483647/strip/true/crop/7130x4011+0+372/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9e%2F65%2Fb578a8301e41d54b9f6cfe3d0676%2Ffef3d001ba4c4b17b4533adf6933b8a0",
          publishedAt: "2025-03-13T04:45:00Z",
          source: {
            name: "The Associated Press",
            url: "https://apnews.com",
          },
        },
        {
          title: "Joan Baez Slams 'Incompetent Billionaires' Running America",
          description:
            "Joan Baez said America is being run by 'incompetent billionaires' during her appearance on 'Everybody's Live With John Mulaney.'",
          content:
            "Joan Baez shared a stern message about U.S. politics during her Wednesday night appearance on the season premiere of “Everybody’s Live With John Mulaney.”\nBefore telling a story about Martin Luther King Jr., who she said was a “funny person,” Baez pa... [1233 chars]",
          url: "https://variety.com/2025/tv/news/joan-baez-incompetent-billionaires-america-john-mulaney-1236335960/",
          image:
            "https://variety.com/wp-content/uploads/2018/11/mg_9624-e1542115209931.jpg?w=1000&h=563&crop=1",
          publishedAt: "2025-03-13T04:16:00Z",
          source: {
            name: "Variety",
            url: "https://variety.com",
          },
        },
        {
          title:
            "Rubio could face unfriendly reception as G7 foreign ministers meet in Canada",
          description:
            "U.S. Secretary of State Marco Rubio will likely be hearing a litany of complaints starting Thursday about Trump’s decisions from once-friendly, like-minded countries in the G7, notably host Canada.",
          content:
            "LA MALBAIE, Canada (AP) — U.S. Secretary of State Marco Rubio may be walking into unusually unfriendly territory this week when he meets his counterparts from the Group of 7 industrialized democracies — strong American allies stunned by President Don... [5729 chars]",
          url: "https://apnews.com/article/g7-canada-trump-tariffs-rubio-ukraine-russia-5f39395504f46892882ebb9be9de20e9",
          image:
            "https://dims.apnews.com/dims4/default/cb8c404/2147483647/strip/true/crop/6857x3857+0+365/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F57%2F59%2F2257653cc92969576e7e7afdfbe8%2Fefa4bd7f36134f29a799bad3e9eaf019",
          publishedAt: "2025-03-13T04:01:00Z",
          source: {
            name: "The Associated Press",
            url: "https://apnews.com",
          },
        },
        {
          title:
            "Thunder vs. Celtics takeaways: Why OKC forced Boston into historic 3-point barrage in possible Finals preview",
          description:
            "The Celtics attempted 63 3-pointers, and it was all by design as the Thunder pulled out an enormous road win",
          content:
            "There's going to be some temptation, especially given the quality of the game itself, to treat Wednesday's battle between the Boston Celtics and Oklahoma City Thunder as an NBA Finals preview. It makes sense on paper. The Celtics are the defending ch... [8909 chars]",
          url: "https://www.cbssports.com/nba/news/thunder-vs-celtics-takeaways-why-okc-forced-boston-into-historic-3-point-barrage-in-possible-finals-preview/",
          image:
            "https://sportshub.cbsistatic.com/i/r/2025/03/13/2bddaabe-794d-411c-ad15-b71e551d0532/thumbnail/1200x675/170705d2971db14aa42fc6496bc9779e/sga-v-celtics-getty.png",
          publishedAt: "2025-03-13T03:55:00Z",
          source: {
            name: "CBS Sports",
            url: "https://www.cbssports.com",
          },
        },
        {
          title:
            "Former Texas megachurch pastor indicted in Oklahoma on child sexual abuse charges",
          description:
            "The Oklahoma Attorney General’s office says a former pastor of a Texas megachurch who resigned after a woman accused him of sexually abusing her in the 1980s has been indicted on child sexual abuse charges.",
          content:
            "DALLAS (AP) — A former pastor of a Texas megachurch who resigned after a woman accused him of sexually abusing her in the 1980s has been indicted in Oklahoma on child sexual abuse charges, that state’s attorney general’s office said Wednesday.\nRobert... [2731 chars]",
          url: "https://apnews.com/article/texas-megachurch-pastor-child-sexual-abuse-charges-7780fee17c2f670f1ef34a8d72bc6a14",
          image:
            "https://dims.apnews.com/dims4/default/c27f100/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F75%2F68%2F9e740b3ee6c10e8b3e94f73666c5%2F37a24a69bb804425b1804f08a22a707e",
          publishedAt: "2025-03-13T03:46:00Z",
          source: {
            name: "The Associated Press",
            url: "https://apnews.com",
          },
        },
        {
          title:
            "Report: Steelers have made offer to Aaron Rodgers, who is mulling it",
          description: "The ball is supposedly in Rodgers's court.",
          content:
            "The ball is reportedly in Aaron Rodgers’s court.\nGerry Dulac of the Pittsburgh Post-Gazette, who reported on Tuesday that the Steelers could pivot back to Russell Wilson if talks with Aaron Rodgers bog down over money, now reports that Pittsburgh has... [1137 chars]",
          url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/report-steelers-have-made-offer-to-aaron-rodgers-who-is-mulling-it",
          image:
            "https://nbcsports.brightspotcdn.com/dims4/default/6597e45/2147483647/strip/true/crop/7136x4014+0+372/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F0b%2F7f%2F775cf5f549f290bddfa7282cfb28%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2179870663",
          publishedAt: "2025-03-13T03:27:38Z",
          source: {
            name: "NBC Sports",
            url: "https://www.nbcsports.com",
          },
        },
        {
          title: "Ex-Patriots QB Mac Jones Reportedly Lands With NFC West Team",
          description:
            "Former New England Patriots quarterback Mac Jones reportedly will join his third NFL franchise with the San Francisco 49ers.",
          content:
            "Mac Jones attempted to revitalize his career last season after the New England Patriots traded him to his hometown Jacksonville Jaguars.\nJones got another crack as a starting quarterback when Trevor Lawrence went down with a shoulder injury. The 2021... [1197 chars]",
          url: "https://nesn.com/2025/03/ex-patriots-qb-mac-jones-reportedly-lands-with-nfc-west-team/",
          image:
            "https://nesn.com/wp-content/uploads/sites/5/2025/03/mac-jones.jpg",
          publishedAt: "2025-03-13T03:25:42Z",
          source: {
            name: "NESN",
            url: "https://nesn.com",
          },
        },
        {
          title:
            "En Vogue singer Dawn Robinson reveals she's living in her car",
          description:
            'The Grammy-nominated singer said in a 20-minute video that she "felt free" as she started living in her car and told fans she wasn\'t looking for pity.',
          content:
            "For En Vogue's Dawn Robinson, the road has become her home.\nIn a candid video blog posted Tuesday, the Grammy-nominated R&B singer revealed to fans that she's been living in her car for the past three years.\n\"This is not like, 'Oh my God, poor Dawn. ... [2733 chars]",
          url: "https://www.usatoday.com/story/entertainment/celebrities/2025/03/12/dawn-robinson-living-in-car-en-vogue/82345169007/",
          image:
            "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/03/13/USAT/82345300007-173202423.jpg?crop=2996,1686,x0,y238&width=2996&height=1686&format=pjpg&auto=webp",
          publishedAt: "2025-03-13T02:49:45Z",
          source: {
            name: "USA TODAY",
            url: "https://www.usatoday.com",
          },
        },
        {
          title:
            "Kelly Clarkson Expected To Resume Taping Thursday After Absence",
          description:
            "Kelly Clarkson Expected To Resume Taping On Her Eponymous Talk Show Thursday After Unexplained Absence",
          content:
            "Kelly Clarkson is expected to resume taping March 13 on her eponymous talk show after an unexplained absence left fans wondering where their favorite singer-host had gone.\nClarkson missed the March 3 taping of The Kelly Clarkson Show and was replaced... [1060 chars]",
          url: "https://deadline.com/2025/03/kelly-clarkson-returning-march-13-talk-show-1236324974/",
          image:
            "https://deadline.com/wp-content/uploads/2024/11/Kelly-Clarkson.jpg?w=1000",
          publishedAt: "2025-03-13T02:44:00Z",
          source: {
            name: "Deadline",
            url: "https://deadline.com",
          },
        },
      ],
    } as NewsApiResponse;
    return response.articles;
    // return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
