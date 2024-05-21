# Use the official Nginx image
FROM nginx

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the contents from the build directory to the nginx html directory
COPY build/ /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
