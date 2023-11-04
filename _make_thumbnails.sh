#!/bin/bash

# Create thumbnails for images in the "images" directory
for file in images/*.{jpg,png}; do
    # Extract the filename without the directory
    filename=$(basename "$file")

    # Check if the thumbnail file doesn't exist
    if [ ! -f "tn/images/$filename" ]; then
        # Create a thumbnail for the current image
        convert "$file" -thumbnail 160x160 "tn/images/$filename"
    fi
done
