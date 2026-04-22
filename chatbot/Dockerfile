# Python 3.12.5 slim base image
FROM python:3.12.5-slim

# Set the working directory in the container
WORKDIR /app

# optimize pip for low resources
ENV PIP_NO_CACHE_DIR=1 \
    PYTHONUNBUFFERED=1

# Copy the requirements into the container
COPY requirements.txt .

# Install the dependencies and force PyTorch installation to use the CPU version
RUN pip install --upgrade pip && \
    pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu && \
    pip install -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose to port 8000
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "app.chatbot_api:app", "--host", "0.0.0.0", "--port", "8000"]