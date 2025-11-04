import { mockPosts } from "../data/mock-posts";

describe('Post Detail Page Tests', () => {
    it('should display post details', () => {
        const mockPost = mockPosts[0];

        cy.visit('http://localhost:3000/posts/' + mockPost.id);

        cy.get('.post-title').contains(mockPost.title);
        cy.get('.post-subtitle').contains( mockPost.subtitle);
        cy.get('.post-content').contains(mockPost.content);
    });
});
