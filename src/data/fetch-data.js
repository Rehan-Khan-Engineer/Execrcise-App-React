const fetchRepoHandler = async (setRepos, setError, previousDate) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=created:>${previousDate}&sort=stars&order=desc`
    );

    if (!response.ok) {
      throw new Error("Sorry! Something went wrong!");
    }

    const data = await response.json();

    const transformedRepoData = data.items.map((item) => {
      return {
        id: item?.id,
        repoName: item?.name,
        repoLink: item?.html_url,
        description: item?.description,
        lastPushedDatestr: item?.pushed_at,
        starCount: item?.stargazers_count,
        openIssues: item?.open_issues,
        owner: {
          name: item?.owner.login,
          imgUrl: item?.owner.avatar_url,
          userLink: item?.owner.html_url,
        },
      };
    });

    setRepos(transformedRepoData);
  } catch (error) {
    setError(error.message);
  }
};

export default fetchRepoHandler;
