import React, { useEffect } from "react";
import { UseContext } from "../synergy/synergy";
import { Grid, Image, Header, List, Icon } from "semantic-ui-react";
import PostPlaceholder from "../ui/post-placeholder";
const UserDetails = () => {
  const { getUser, user, routeToDetails } = UseContext();
  useEffect(() => {
    getUser();
  }, []);
  const handleClick = (e) => {
    const postId = e.currentTarget.dataset.postid;
    const userId = e.currentTarget.dataset.userid;
    routeToDetails(postId, userId);
  };
  return (
    <Grid columns={3}>
      {user && user.data ? (
        <>
          <Grid.Row id="user-details">
            <Grid.Column width={16} className="user-details-header">
              <Header as="h1">{user.data.name}</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://picsum.photos/300/300?random=1" />
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h3">Contect Info</Header>
              <List relaxed>
                <List.Item>
                  <List.Icon name="user" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a">Username</List.Header>
                    <List.Description as="a">
                      {user.data.username}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="mail" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a">Email</List.Header>
                    <List.Description as="a">
                      {user.data.email}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="phone" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a">Phone</List.Header>
                    <List.Description as="a">
                      {user.data.phone}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon
                    name="github"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a">Website</List.Header>
                    <List.Description as="a">
                      {user.data.website}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h3">Company</Header>
              <List relaxed>
                <List.Item>
                  <List.Icon
                    name="building outline"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a">Company</List.Header>
                    <List.Description as="a">
                      {user.data.company.name}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon
                    name="briefcase"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a">Services</List.Header>
                    <List.Description as="a">
                      {user.data.company.catchPhrase}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon
                    name="comment alternate outline"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a">Slogan</List.Header>
                    <List.Description as="a">
                      {user.data.company.bs}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={8}>
              <List divided relaxed>
                <Header as="h3">Recent Posts</Header>
                {user.posts.map((item) => {
                  return (
                    <List.Item
                      key={item.title}
                      data-userid={user.data.id}
                      data-postid={item.id}
                      onClick={handleClick}
                    >
                      <List.Content>
                        <List.Header as="a">{item.title}</List.Header>
                        <List.Description as="a">
                          <Icon name="long arrow alternate right" />
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </>
      ) : (
        <PostPlaceholder />
      )}
    </Grid>
  );
};

export default UserDetails;
