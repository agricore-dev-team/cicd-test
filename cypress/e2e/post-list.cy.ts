import { mockPosts } from "../data/mock-posts";

describe('Post list page tests', () => {
    it('should display a list of posts', () => {
        cy.visit('http://localhost:3000/posts');

        mockPosts.forEach((post) => {
            cy.get(`#post-article-${post.id}`).within(() => {
                cy.contains(post.title);
                cy.contains(post.subtitle);
            });
        });
    });

    it('should navigate to post detail page on post click', () => {
        cy.visit('http://localhost:3000/posts');
        
        const firstPost = mockPosts[0];

        cy.get(`#post-article-${firstPost.id}`).click();

        cy.url().should('include', `/posts/${firstPost.id}`);
    });
});
