export const WEEKS = [
  {
    "id": "b5",
    "num": "WEEK B05",
    "title": "PyTorch Foundations",
    "theme": "Deep Learning Core",
    "color": "#ec4899",
    "boss": {
      "id": "boss-b5",
      "name": "The Torch Bearer",
      "challenge": "Master PyTorch tensors, autograd, and build your first neural network from scratch",
      "rewardXP": 500,
      "resumeLine": "Built neural networks from scratch with PyTorch implementing forward pass, backpropagation, and optimization",
      "successCriteria": [
        "Understand tensors: creation, operations, broadcasting, GPU movement",
        "Implement manual forward pass and backpropagation for simple network",
        "Build neural network with nn.Module: 2-layer MLP for MNIST",
        "Train loop: forward, loss, backward, step",
        "Evaluate: accuracy, loss curves, visualization",
        "Save and load model checkpoints",
        "35 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Install PyTorch with CUDA support (if GPU available) or CPU",
        "Learn tensors: torch.tensor, shapes, dtypes, operations, broadcasting",
        "Manual gradient computation with torch.autograd",
        "Build nn.Module: __init__ defines layers, forward defines computation",
        "Train on MNIST: 784 → 128 → 10, ReLU, CrossEntropyLoss, Adam",
        "Plot loss and accuracy curves",
        "Save best model, load, evaluate on test set",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Jupyter notebook with tensor operations",
        "Manual backprop implementation",
        "MNIST classifier code",
        "Loss/accuracy curves",
        "Model checkpoint file",
        "35 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "MNIST classifier >90% accuracy, understands backprop, 35 medium",
        "fail": "Only using high-level APIs without understanding, or <35 medium"
      }
    },
    "tasks": [
      {
        "id": "b5-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Install PyTorch. Learn tensors: create, reshape, slice, concatenate, broadcast. Move to GPU with .cuda(). Compare CPU vs GPU speed.",
        "reason": "Tensors are the building blocks. Everything in PyTorch is a tensor. Master them first."
      },
      {
        "id": "b5-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Learn autograd: requires_grad, backward(), grad. Implement manual gradient computation for y = x². Verify with analytical derivative.",
        "reason": "Autograd is PyTorch's magic. Understanding it separates users from engineers."
      },
      {
        "id": "b5-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build neural network with nn.Module: __init__ defines layers (nn.Linear, nn.ReLU), forward defines computation. No copy-paste. Write every line.",
        "reason": "nn.Module is the foundation. Every model in PyTorch inherits from it. Understand the lifecycle."
      },
      {
        "id": "b5-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Load MNIST with torchvision.datasets. Preprocess: normalize, flatten, DataLoader with batch_size=64. Visualize samples.",
        "reason": "MNIST is the 'hello world' of deep learning. Master it before moving to complex datasets."
      },
      {
        "id": "b5-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Implement train loop: for epoch, for batch, forward, compute loss, loss.backward(), optimizer.step(), optimizer.zero_grad(). Track loss and accuracy.",
        "reason": "The train loop is the engine. Every PyTorch project uses this pattern. Memorize it, then optimize it."
      },
      {
        "id": "b5-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Evaluate on test set. Plot train/test loss curves, accuracy curves. Identify overfitting. Add dropout or L2 regularization if needed.",
        "reason": "Evaluation proves generalization. Plots reveal overfitting. Regularization fixes it."
      },
      {
        "id": "b5-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 25,
        "text": "Save best model: torch.save(). Load and test prediction. LeetCode: 2 medium in Python. Blog: 'Building My First Neural Network with PyTorch'.",
        "reason": "Model persistence is production engineering. Save checkpoints, not just final models."
      }
    ]
  },
  {
    "id": "b6",
    "num": "WEEK B06",
    "title": "CNNs for Computer Vision",
    "theme": "Vision AI",
    "color": "#06b6d4",
    "boss": {
      "id": "boss-b6",
      "name": "The Vision Engineer",
      "challenge": "Build CNN for image classification. Understand convolutions, pooling, batch norm, data augmentation",
      "rewardXP": 500,
      "resumeLine": "Built CNN architecture achieving 92%+ accuracy on CIFAR-10 with data augmentation and transfer learning",
      "successCriteria": [
        "CNN from scratch: conv2d, ReLU, maxpool, flatten, linear",
        "Train on CIFAR-10: 32x32 color images, 10 classes",
        "Data augmentation: random_crop, horizontal flip, normalization",
        "Batch normalization and dropout",
        "Transfer learning: fine-tune ResNet-18",
        "Compare from-scratch vs transfer learning accuracy",
        "40 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Build CNN: Conv2d → ReLU → MaxPool2d → Conv2d → ReLU → MaxPool2d → Flatten → Linear → Linear",
        "Load CIFAR-10 with torchvision",
        "Data augmentation: transforms.RandomCrop, RandomHorizontalFlip, Normalize",
        "Add BatchNorm2d after conv layers, Dropout before linear",
        "Train for 10 epochs, track loss/accuracy",
        "Load pretrained ResNet-18, freeze early layers, fine-tune last layers",
        "Compare accuracy: from-scratch vs transfer learning",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "CNN from-scratch code",
        "Transfer learning code",
        "Accuracy comparison table",
        "Loss/accuracy curves for both",
        "40 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "CNN >85% on CIFAR-10, transfer learning >92%, understands all layers, 40 medium",
        "fail": "Copy-pasting architecture without understanding, or <40 medium"
      }
    },
    "tasks": [
      {
        "id": "b6-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Learn convolutions: kernel, stride, padding, channels. Implement 2D convolution manually with loops, then with F.conv2d. Visualize filter responses.",
        "reason": "Convolutions are the heart of CNNs. Understanding them at the math level helps you debug weird outputs."
      },
      {
        "id": "b6-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build CNN from scratch: 2 conv blocks (conv + relu + maxpool), flatten, 2 linear layers. Count parameters manually. Understand receptive field.",
        "reason": "Parameter counting is an interview question. Receptive field determines what the network sees."
      },
      {
        "id": "b6-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Load CIFAR-10. Implement data augmentation: RandomCrop(32, padding=4), RandomHorizontalFlip, Normalize. Compare augmented vs non-augmented training.",
        "reason": "Data augmentation is free data. It prevents overfitting and improves generalization."
      },
      {
        "id": "b6-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add BatchNorm2d after each conv. Add Dropout(0.5) before linear. Train. Compare with/without batch norm and dropout.",
        "reason": "Batch norm stabilizes training. Dropout prevents overfitting. Ablate them to see their impact."
      },
      {
        "id": "b6-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Transfer learning: load pretrained ResNet-18 from torchvision. Freeze conv layers. Replace final linear layer for 10 classes. Fine-tune.",
        "reason": "Transfer learning is production reality. Nobody trains ImageNet from scratch. Learn to fine-tune."
      },
      {
        "id": "b6-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Compare results: from-scratch CNN vs transfer learning. Table: parameters, epochs, final accuracy, training time. Plot confusion matrix for best model.",
        "reason": "Data-driven comparison is engineering. Confusion matrix reveals class-specific failures."
      },
      {
        "id": "b6-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python. Blog: 'CNN from Scratch vs Transfer Learning: CIFAR-10 Results'. Share comparison table and lessons.",
        "reason": "Comparison content with numbers is rare and valuable. Shows scientific thinking."
      }
    ]
  },
  {
    "id": "b7",
    "num": "WEEK B07",
    "title": "RNNs + NLP Foundations",
    "theme": "Sequence Models",
    "color": "#84cc16",
    "boss": {
      "id": "boss-b7",
      "name": "The Sequence Modeler",
      "challenge": "Build RNN and LSTM for text classification. Understand embeddings, sequences, padding",
      "rewardXP": 500,
      "resumeLine": "Implemented RNN and LSTM architectures for sentiment analysis achieving 87%+ accuracy",
      "successCriteria": [
        "Text preprocessing: tokenization, vocabulary, padding, embeddings",
        "RNN from scratch: hidden state, tanh, sequence processing",
        "LSTM: forget gate, input gate, output gate, cell state",
        "Train on IMDB sentiment: positive/negative reviews",
        "Word embeddings: nn.Embedding or pretrained GloVe",
        "Bidirectional LSTM for improved accuracy",
        "45 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Load IMDB dataset with torchtext or datasets library",
        "Tokenize: split words, build vocabulary, numericalize",
        "Pad sequences: make all same length for batching",
        "Build RNN: embedding → RNN → linear → sigmoid",
        "Build LSTM: embedding → LSTM → linear → sigmoid",
        "Add bidirectional: nn.LSTM(bidirectional=True)",
        "Compare: RNN vs LSTM vs BiLSTM accuracy",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "RNN implementation",
        "LSTM implementation",
        "BiLSTM implementation",
        "Accuracy comparison table",
        "45 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "BiLSTM >87% on IMDB, understands gates, 45 medium",
        "fail": "Using LSTM without understanding gates, or <45 medium"
      }
    },
    "tasks": [
      {
        "id": "b7-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Learn text preprocessing: tokenization (split or tokenizer), vocabulary (word2idx, idx2word), padding (pad_sequence). Load IMDB dataset.",
        "reason": "Text is not numbers. Preprocessing is 50% of NLP work. Master tokenization and vocabulary."
      },
      {
        "id": "b7-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build RNN from scratch: nn.Embedding, nn.RNN, hidden state initialization, tanh activation. Understand vanishing gradients problem.",
        "reason": "RNNs are the foundation. Understanding why they fail (vanishing gradients) explains why LSTM exists."
      },
      {
        "id": "b7-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build LSTM: understand forget gate (what to discard), input gate (what to store), output gate (what to output), cell state (long-term memory).",
        "reason": "LSTM gates are interview questions. If you can't explain them, you don't understand LSTM."
      },
      {
        "id": "b7-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Train RNN and LSTM on IMDB. Compare accuracy, training time, loss curves. Identify where RNN fails and LSTM succeeds.",
        "reason": "Ablations prove understanding. Don't just claim LSTM is better. Show the data."
      },
      {
        "id": "b7-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add bidirectional LSTM: processes sequence forward and backward. Compare accuracy. Add attention visualization if possible.",
        "reason": "Bidirectional captures context from both directions. Standard for modern NLP."
      },
      {
        "id": "b7-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Try pretrained embeddings: GloVe or word2vec. Freeze vs fine-tune. Compare with random embeddings.",
        "reason": "Pretrained embeddings transfer knowledge. Fine-tuning adapts to your domain."
      },
      {
        "id": "b7-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python. Blog: 'RNN vs LSTM vs BiLSTM: IMDB Sentiment Results'. Explain gates with diagrams.",
        "reason": "Gate explanations with diagrams are rare. Shows deep understanding, not API usage."
      }
    ]
  },
  {
    "id": "b8",
    "num": "WEEK B08",
    "title": "Transformers Architecture",
    "theme": "Modern NLP",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-b8",
      "name": "The Transformer Architect",
      "challenge": "Understand attention mechanism. Use Hugging Face transformers. Fine-tune BERT for classification",
      "rewardXP": 600,
      "resumeLine": "Fine-tuned BERT for text classification with Hugging Face achieving 94%+ accuracy",
      "successCriteria": [
        "Understand attention: query, key, value, softmax, scaled dot-product",
        "Multi-head attention: parallel attention heads, concatenation",
        "Positional encoding: why needed, how implemented",
        "Use Hugging Face transformers: AutoTokenizer, AutoModel",
        "Fine-tune BERT for IMDB sentiment",
        "Compare: BERT vs BiLSTM accuracy, speed, size",
        "50 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Study attention mechanism: Q, K, V matrices, attention scores, softmax, weighted sum",
        "Implement scaled dot-product attention manually",
        "Study Transformer block: multi-head attention → add & norm → feedforward → add & norm",
        "Install transformers library",
        "Load BERT-base-uncased, tokenizer",
        "Fine-tune on IMDB: Trainer API or custom loop",
        "Compare with BiLSTM: accuracy, inference time, model size",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Manual attention implementation",
        "BERT fine-tuning code",
        "Comparison table: BERT vs BiLSTM",
        "50 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "BERT >94% on IMDB, understands attention math, 50 medium",
        "fail": "Using BERT without understanding attention, or <50 medium"
      }
    },
    "tasks": [
      {
        "id": "b8-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study attention mechanism: Q, K, V matrices, attention scores = QK^T / sqrt(d_k), softmax, weighted sum of V. Implement manually with numpy.",
        "reason": "Attention is the most important concept in modern AI. If you can't implement it manually, you don't understand it."
      },
      {
        "id": "b8-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Study multi-head attention: split Q/K/V into h heads, compute attention in parallel, concatenation, linear projection. Understand why multiple heads help.",
        "reason": "Multi-head captures different relationships. One head for syntax, one for semantics, etc."
      },
      {
        "id": "b8-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Study Transformer block: multi-head attention → residual connection → layer norm → feedforward → residual → layer norm. Understand why each component exists.",
        "reason": "The Transformer block is Lego. Every modern model (GPT, BERT, T5) uses this block. Master it."
      },
      {
        "id": "b8-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Install transformers library. Load BERT-base-uncased. Tokenize text. Understand [CLS], [SEP], attention_mask. Pass through model. Extract [CLS] embedding.",
        "reason": "Hugging Face is the standard. BERT's [CLS] token is the sentence representation for classification."
      },
      {
        "id": "b8-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Fine-tune BERT on IMDB: use Trainer API or custom PyTorch loop. Freeze BERT layers initially, then unfreeze. Compare accuracy vs training time.",
        "reason": "Fine-tuning BERT is production NLP. Freezing first prevents catastrophic forgetting."
      },
      {
        "id": "b8-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Compare BERT vs BiLSTM: accuracy, inference time (ms per sample), model size (MB), training time. Table and plot.",
        "reason": "BERT is more accurate but slower. Trade-offs are engineering decisions. Data drives decisions."
      },
      {
        "id": "b8-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 125,
        "text": "LeetCode: 2 medium in Python. Blog: 'I Fine-Tuned BERT: Understanding Attention from Scratch'. Include attention visualization.",
        "reason": "Attention visualization is viral content. Shows you understand what the model sees."
      }
    ]
  }
];

export const DETAILS = {
  "b5-d1": {
    "objective": "Establish intuition for multi-dimensional Tensors and PyTorch environment setup",
    "why": "Tensors are the fundamental data structure of Deep Learning. Understanding how to manipulate them and leverage GPU acceleration is the prerequisite for all model building.",
    "steps": [
      "Install PyTorch (use the official site matrix to match your CUDA/CPU specs).",
      "Create tensors from lists, numpy arrays, and random distributions (`torch.randn`).",
      "Perform matrix multiplications (`torch.matmul` or `@`).",
      "Move a tensor to the GPU using `.to('cuda')` and compare the execution time of a large matrix multiplication."
    ],
    "tools": ["PyTorch", "Jupyter"],
    "deliverable": "A notebook containing 20+ different tensor operations and a CPU vs GPU benchmark",
    "definitionOfDone": "You can successfully reshape a 1D tensor into a 3D tensor and multiply it by another tensor",
    "commonMistakes": ["Trying to perform operations between a CPU tensor and a GPU tensor (throws an error)"],
    "resumeLine": null,
    "connectsTo": "b5-d2"
  },
  "b5-d2": {
    "objective": "Deconstruct Automatic Differentiation (Autograd) and the backward pass",
    "why": "Autograd is the 'magic' that trains neural networks. If you don't understand how gradients flow backward, you cannot debug failing models.",
    "steps": [
      "Create a tensor with `requires_grad=True`.",
      "Define a simple mathematical function (e.g., $y = 3x^2 + 2x$).",
      "Call `y.backward()` and inspect `x.grad`.",
      "Manually calculate the derivative and compare it to PyTorch's output.",
      "Learn how to use `with torch.no_grad():` for inference."
    ],
    "tools": ["torch.autograd"],
    "deliverable": "A script proving that PyTorch's gradients match analytical calculus",
    "definitionOfDone": "You can explain *why* `optimizer.zero_grad()` is required in a training loop",
    "commonMistakes": ["Forgetting to zero gradients, causing them to accumulate across batches"],
    "resumeLine": null,
    "connectsTo": "b5-d3"
  },
  "b5-d3": {
    "objective": "Architect a Multi-Layer Perceptron (MLP) using the `nn.Module` class",
    "why": "The `nn.Module` is the blueprint for every model in PyTorch. You must understand how to define state (layers) in `__init__` and behavior in `forward`.",
    "steps": [
      "Create a class `SimpleMLP` that inherits from `nn.Module`.",
      "Define 3 `nn.Linear` layers in the `__init__` method.",
      "Implement the `forward` pass using `F.relu` as the activation function.",
      "Instantiate the model and pass a dummy tensor through it to verify the output shape."
    ],
    "tools": ["torch.nn"],
    "deliverable": "A functioning MLP architecture class",
    "definitionOfDone": "The model successfully accepts a [Batch, Input] tensor and returns a [Batch, Output] tensor",
    "commonMistakes": ["Defining activation functions in `__init__` instead of applying them in `forward`"],
    "resumeLine": "Architected custom Neural Networks in PyTorch leveraging the nn.Module paradigm",
    "connectsTo": "b5-d4"
  },
  "b5-d4": {
    "objective": "Build a robust Data Pipeline using `Dataset` and `DataLoader`",
    "why": "Models need data in batches. The DataLoader abstracts away batching, shuffling, and multi-processing so you can focus on the model.",
    "steps": [
      "Download the MNIST dataset using `torchvision.datasets`.",
      "Apply a `transform` to convert images to Tensors and normalize them (mean=0.5, std=0.5).",
      "Wrap the datasets in `DataLoader` instances with a `batch_size` of 64.",
      "Iterate over one batch and plot the first 4 images using Matplotlib."
    ],
    "tools": ["torchvision", "DataLoader", "Matplotlib"],
    "deliverable": "A ready-to-train data pipeline providing batched tensors",
    "definitionOfDone": "You can loop through the DataLoader and yield `[64, 1, 28, 28]` shaped image batches",
    "commonMistakes": ["Forgetting to flatten the 2D images into 1D vectors before passing them to a Linear layer"],
    "resumeLine": null,
    "connectsTo": "b5-d5"
  },
  "b5-d5": {
    "objective": "Construct and execute a complete PyTorch Training Loop",
    "why": "Unlike high-level APIs (like Keras), PyTorch requires you to write the loop explicitly. This gives you ultimate control over the optimization process.",
    "steps": [
      "Define a Loss Function (`nn.CrossEntropyLoss`) and an Optimizer (`torch.optim.Adam`).",
      "Write the outer loop for `epochs` and the inner loop for `batches`.",
      "Implement the 5 steps: forward pass, compute loss, zero gradients, backward pass, optimizer step.",
      "Print the average loss at the end of each epoch."
    ],
    "tools": ["torch.optim"],
    "deliverable": "A working training script that successfully reduces the loss over time",
    "definitionOfDone": "The model trains for 5 epochs and the training loss consistently decreases",
    "commonMistakes": ["Applying a Softmax activation before CrossEntropyLoss (PyTorch's CrossEntropyLoss expects raw logits)"],
    "resumeLine": "Engineered custom training loops in PyTorch featuring dynamic optimization and gradient tracking",
    "connectsTo": "b5-d6"
  },
  "b5-d6": {
    "objective": "Implement an Evaluation Loop and plot learning curves",
    "why": "Training loss is a vanity metric; validation accuracy proves generalization. You must be able to detect overfitting visually.",
    "steps": [
      "Write an `evaluate` function wrapped in `torch.no_grad()`.",
      "Calculate the accuracy (correct predictions / total predictions).",
      "Run evaluation at the end of each training epoch and store the metrics.",
      "Plot the Train Loss vs Validation Loss using Matplotlib."
    ],
    "tools": ["Matplotlib", "Validation Loops"],
    "deliverable": "Learning curves demonstrating model convergence",
    "definitionOfDone": "The model achieves >90% accuracy on the unseen MNIST test set",
    "commonMistakes": ["Leaving the model in `.train()` mode during evaluation (fails to disable Dropout/BatchNorm)"],
    "resumeLine": null,
    "connectsTo": "b5-d7"
  },
  "b5-d7": {
    "objective": "Implement model persistence and document the PyTorch workflow",
    "why": "A trained model sitting in memory is useless. You must know how to save the 'state dictionary' and reload it for production inference.",
    "steps": [
      "Save the trained model using `torch.save(model.state_dict(), 'model.pth')`.",
      "Instantiate a fresh, untrained model and load the weights using `model.load_state_dict()`.",
      "Run the loaded model on a single test image to verify it retained its accuracy.",
      "Write a LinkedIn post summarizing the 5 steps of the PyTorch training loop."
    ],
    "tools": ["State Dictionaries", "LinkedIn"],
    "deliverable": "A serialized `.pth` model file and an authority-building social post",
    "definitionOfDone": "The loaded model produces the exact same predictions as the model in memory",
    "commonMistakes": ["Saving the entire model object instead of just the `state_dict` (leads to directory path issues)"],
    "resumeLine": "Deployed and serialized PyTorch models for production inference environments",
    "connectsTo": "Week 6"
  },
  "b6-d1": {
    "objective": "Deconstruct the mathematics and implementation of 2D Convolutions",
    "why": "MLPs destroy spatial information by flattening images. Convolutional Neural Networks (CNNs) preserve this 2D structure, making them the foundation of modern Computer Vision.",
    "steps": [
      "Understand the mechanics of a Kernel sliding over an image.",
      "Calculate the output shape given Input Size, Kernel Size, Stride, and Padding.",
      "Write a nested `for` loop in Python to manually convolve a 3x3 filter over a 5x5 matrix.",
      "Use `torch.nn.functional.conv2d` to perform the same operation instantly."
    ],
    "tools": ["Matrix Math", "F.conv2d"],
    "deliverable": "A notebook proving your manual convolution matches PyTorch's output",
    "definitionOfDone": "You can calculate the exact dimensions of a tensor after it passes through a `Conv2d` layer",
    "commonMistakes": ["Confusing 'Channels' with 'Batch Size' in the tensor dimensions `[N, C, H, W]`"],
    "resumeLine": null,
    "connectsTo": "b6-d2"
  },
  "b6-d2": {
    "objective": "Architect a Convolutional Neural Network from scratch",
    "why": "Building a CNN from primitive layers proves you understand feature extraction and spatial downsampling.",
    "steps": [
      "Define a `SimpleCNN` inheriting from `nn.Module`.",
      "Create two Convolutional Blocks: `Conv2d` -> `ReLU` -> `MaxPool2d`.",
      "Determine the flattened dimension output of the final MaxPool layer.",
      "Add two `Linear` layers to classify the features into 10 output classes."
    ],
    "tools": ["nn.Conv2d", "nn.MaxPool2d"],
    "deliverable": "A structurally sound, from-scratch CNN architecture",
    "definitionOfDone": "A dummy tensor of shape `[64, 3, 32, 32]` successfully passes through the network yielding `[64, 10]`",
    "commonMistakes": ["Calculating the `Linear` input size incorrectly after multiple pooling operations"],
    "resumeLine": "Designed custom Convolutional Neural Networks for spatial feature extraction and image classification",
    "connectsTo": "b6-d3"
  },
  "b6-d3": {
    "objective": "Implement aggressive Data Augmentation to combat overfitting",
    "why": "Neural networks are data-hungry. Augmentation artificially expands your dataset by mutating existing images, forcing the model to learn invariant features.",
    "steps": [
      "Load the CIFAR-10 dataset using `torchvision`.",
      "Define a training transform pipeline: `RandomHorizontalFlip`, `RandomCrop`, `ToTensor`, `Normalize`.",
      "Define a simpler test transform pipeline (no random flips!).",
      "Plot a grid of 4 augmented versions of the same source image."
    ],
    "tools": ["torchvision.transforms"],
    "deliverable": "A robust data augmentation pipeline",
    "definitionOfDone": "The training DataLoader yields randomly transformed image tensors",
    "commonMistakes": ["Applying random augmentations to the validation/test set (they must remain static)"],
    "resumeLine": "Engineered data augmentation pipelines in PyTorch, significantly reducing model overfitting and improving generalization",
    "connectsTo": "b6-d4"
  },
  "b6-d4": {
    "objective": "Integrate advanced regularization: Batch Normalization and Dropout",
    "why": "Deep networks suffer from internal covariate shift and co-adaptation. BatchNorm speeds up convergence; Dropout prevents overfitting.",
    "steps": [
      "Inject `nn.BatchNorm2d` after every Convolutional layer (before the ReLU).",
      "Inject `nn.Dropout(p=0.5)` before your final Linear layer.",
      "Train the model for 10 epochs on CIFAR-10.",
      "Ensure you use `model.train()` and `model.eval()` to toggle these layers' behaviors during testing."
    ],
    "tools": ["nn.BatchNorm2d", "nn.Dropout"],
    "deliverable": "A regularized, high-performance CNN",
    "definitionOfDone": "The model trains faster and achieves a higher validation accuracy than the unregularized baseline",
    "commonMistakes": ["Applying BatchNorm *after* the activation function (it usually performs better before)"],
    "resumeLine": "Optimized deep network convergence using Batch Normalization and aggressive Dropout regularization",
    "connectsTo": "b6-d5"
  },
  "b6-d5": {
    "objective": "Leverage Pre-trained Models via Transfer Learning",
    "why": "In production, you never train from scratch. You fine-tune an existing architecture (like ResNet) that has already learned to 'see' the world.",
    "steps": [
      "Load a pre-trained `resnet18` from `torchvision.models`.",
      "Freeze the network by setting `requires_grad = False` for all parameters.",
      "Replace the final fully connected layer (`model.fc`) with a new layer matching CIFAR-10's 10 classes.",
      "Set the optimizer to only update the parameters of the newly added final layer."
    ],
    "tools": ["ResNet", "Transfer Learning"],
    "deliverable": "A fine-tuning pipeline utilizing ResNet-18",
    "definitionOfDone": "The model successfully trains only the final layer while utilizing the frozen feature extractors",
    "commonMistakes": ["Forgetting to update the data normalization values to match what the pre-trained model expects (ImageNet stats)"],
    "resumeLine": "Implemented Transfer Learning pipelines utilizing ResNet architectures, drastically reducing training time for custom vision tasks",
    "connectsTo": "b6-d6"
  },
  "b6-d6": {
    "objective": "Conduct rigorous model evaluation and failure analysis",
    "why": "Accuracy alone is insufficient. A senior engineer must understand *what* the model is getting wrong to improve it further.",
    "steps": [
      "Run evaluation on both the Custom CNN and the Fine-Tuned ResNet.",
      "Generate a Confusion Matrix for the ResNet model using `sklearn.metrics`.",
      "Identify the top 2 classes that the model confuses the most (e.g., 'Cat' vs 'Dog').",
      "Document the comparison in a structured markdown table."
    ],
    "tools": ["Confusion Matrix", "Evaluation Metrics"],
    "deliverable": "A detailed diagnostic report and visualization of model failures",
    "definitionOfDone": "You can quantitatively prove why the Transfer Learning model outperforms the From-Scratch model",
    "commonMistakes": ["Only looking at overall accuracy and missing class-specific catastrophic failures"],
    "resumeLine": null,
    "connectsTo": "b6-d7"
  },
  "b6-d7": {
    "objective": "Publish a data-driven Computer Vision Case Study",
    "why": "Demonstrating the ability to benchmark and compare complex AI architectures is a massive 'Staff/Senior' signal to recruiters.",
    "steps": [
      "Draft a blog post comparing 'From-Scratch CNNs vs Transfer Learning'.",
      "Include your Confusion Matrix plot.",
      "Share the exact accuracy difference and training time difference.",
      "Publish on LinkedIn and tag #PyTorch and #ComputerVision."
    ],
    "tools": ["LinkedIn", "Data Visualization"],
    "deliverable": "A published, metric-driven technical article",
    "definitionOfDone": "Post is live and clearly articulates the business value of Transfer Learning (faster shipping, better results)",
    "commonMistakes": ["Posting raw code instead of focusing on the high-level architectural takeaways"],
    "resumeLine": null,
    "connectsTo": "Week 7"
  },
  "b7-d1": {
    "objective": "Master Text Preprocessing, Tokenization, and Word Embeddings",
    "why": "Neural networks cannot read strings. Converting text into dense mathematical representations (Embeddings) is the foundation of NLP.",
    "steps": [
      "Load the IMDB sentiment dataset.",
      "Use `torchtext` or `spacy` to tokenize the text into individual words.",
      "Build a Vocabulary object mapping words to integer IDs.",
      "Understand the `nn.Embedding` layer and how it maps integer IDs to dense vectors of shape `[embed_dim]`."
    ],
    "tools": ["Tokenization", "nn.Embedding"],
    "deliverable": "A functional text-to-tensor preprocessing pipeline",
    "definitionOfDone": "A string review is successfully converted into a padded tensor of shape `[batch_size, max_seq_length]`",
    "commonMistakes": ["Not handling 'Unknown' (OOV) tokens, causing crashes during inference"],
    "resumeLine": null,
    "connectsTo": "b7-d2"
  },
  "b7-d2": {
    "objective": "Implement a Recurrent Neural Network (RNN) from first principles",
    "why": "RNNs process data sequentially, making them perfect for text. Understanding standard RNNs reveals their fatal flaw: the vanishing gradient problem.",
    "steps": [
      "Define a model using `nn.Embedding` -> `nn.RNN` -> `nn.Linear`.",
      "Understand how the 'Hidden State' is passed from one time-step to the next.",
      "Extract the final hidden state to use for the classification prediction.",
      "Train the model on the IMDB dataset and track its accuracy."
    ],
    "tools": ["nn.RNN", "Sequential Data"],
    "deliverable": "A working, trained RNN text classifier",
    "definitionOfDone": "The model successfully processes sequential data and learns to predict sentiment, albeit with struggle on long reviews",
    "commonMistakes": ["Using the output of *all* time steps for classification instead of just the *final* time step"],
    "resumeLine": "Architected Recurrent Neural Networks (RNNs) for sequential data processing and text classification",
    "connectsTo": "b7-d3"
  },
  "b7-d3": {
    "objective": "Deconstruct the Long Short-Term Memory (LSTM) Architecture",
    "why": "LSTMs solve the vanishing gradient problem using mathematical 'Gates'. If you cannot explain these gates, you will fail NLP interviews.",
    "steps": [
      "Study the math behind the Forget Gate, Input Gate, and Output Gate.",
      "Understand the difference between the 'Hidden State' ($h_t$) and the 'Cell State' ($C_t$).",
      "Upgrade your PyTorch model to use `nn.LSTM` instead of `nn.RNN`.",
      "Observe the difference in training stability and final accuracy."
    ],
    "tools": ["nn.LSTM", "Gate Mechanisms"],
    "deliverable": "An upgraded LSTM classifier and conceptual notes",
    "definitionOfDone": "You can draw an LSTM cell and explain how the Cell State acts as an 'information highway'",
    "commonMistakes": ["Treating LSTM as a black box without understanding *why* it remembers longer sequences"],
    "resumeLine": "Engineered LSTM networks capable of retaining long-term dependencies for complex sentiment analysis",
    "connectsTo": "b7-d4"
  },
  "b7-d4": {
    "objective": "Conduct an architectural ablation study comparing RNNs and LSTMs",
    "why": "Engineering is about trade-offs. You must prove experimentally that the increased computational cost of an LSTM yields a justifiable return in accuracy.",
    "steps": [
      "Train both models under identical conditions (same epochs, learning rate, embeddings).",
      "Plot their validation accuracy curves overlaying each other.",
      "Document the training time per epoch for both architectures.",
      "Write a brief summary of the findings."
    ],
    "tools": ["Matplotlib", "Ablation Studies"],
    "deliverable": "A detailed performance comparison report",
    "definitionOfDone": "You possess visual proof that LSTMs outperform standard RNNs on the IMDB dataset",
    "commonMistakes": ["Changing multiple variables (like learning rate AND architecture) simultaneously"],
    "resumeLine": null,
    "connectsTo": "b7-d5"
  },
  "b7-d5": {
    "objective": "Enhance contextual understanding with Bidirectional LSTMs",
    "why": "Reading text only left-to-right limits context. Bidirectional processing reads both ways, significantly boosting performance on NLP tasks.",
    "steps": [
      "Modify your `nn.LSTM` layer to include `bidirectional=True`.",
      "Understand that the hidden state size will double (forward + backward concatted).",
      "Update your final `nn.Linear` layer input size to handle this doubling.",
      "Train the model and compare results to the unidirectional LSTM."
    ],
    "tools": ["Bidirectional Processing"],
    "deliverable": "A highly accurate BiLSTM classifier",
    "definitionOfDone": "The BiLSTM achieves the highest accuracy yet on the validation set",
    "commonMistakes": ["Forgetting to multiply the hidden dimension by 2 for the subsequent linear layer"],
    "resumeLine": "Deployed Bidirectional LSTMs (BiLSTM) to capture rich, dual-directional context in Natural Language Processing tasks",
    "connectsTo": "b7-d6"
  },
  "b7-d6": {
    "objective": "Accelerate convergence using Pre-trained GloVe Embeddings",
    "why": "Training embeddings from scratch takes massive amounts of data. Using pre-trained weights (Transfer Learning for text) provides a massive head start.",
    "steps": [
      "Download the GloVe 100d (Global Vectors for Word Representation) dataset.",
      "Map your vocabulary to the corresponding GloVe vectors.",
      "Load these weights directly into your `nn.Embedding` layer.",
      "Freeze the embedding layer initially, train the LSTM, then unfreeze and fine-tune."
    ],
    "tools": ["GloVe", "Transfer Learning"],
    "deliverable": "A model utilizing frozen, pre-trained semantic weights",
    "definitionOfDone": "The model trains significantly faster and achieves high accuracy in fewer epochs",
    "commonMistakes": ["Not handling words in your vocabulary that don't exist in the GloVe dataset (initialize them randomly)"],
    "resumeLine": "Integrated pre-trained semantic embeddings (GloVe) to accelerate NLP model convergence and improve baseline accuracy",
    "connectsTo": "b7-d7"
  },
  "b7-d7": {
    "objective": "Synthesize Sequence Modeling concepts into public technical authority",
    "why": "NLP is a highly sought-after skill. Demonstrating that you understand the evolution from RNN -> LSTM -> BiLSTM positions you as a knowledgeable practitioner.",
    "steps": [
      "Draft a blog post: 'The Evolution of Sequence Models: RNNs, LSTMs, and BiLSTMs compared'.",
      "Use your own accuracy graphs to tell the story.",
      "Explain the concept of 'Gates' in simple, non-academic terms.",
      "Publish and share within AI communities."
    ],
    "tools": ["Blogging", "Technical Communication"],
    "deliverable": "A published, data-backed NLP architecture case study",
    "definitionOfDone": "The post is live and clearly articulates the mathematical advantage of LSTMs over RNNs",
    "commonMistakes": ["Posting raw code instead of explaining the architectural intuition"],
    "resumeLine": null,
    "connectsTo": "Week 8"
  },
  "b8-d1": {
    "objective": "Deconstruct the mathematics of the Scaled Dot-Product Attention mechanism",
    "why": "Attention is the engine of all modern AI (Transformers, GPT). If you do not understand Queries, Keys, and Values, you cannot be an AI Engineer.",
    "steps": [
      "Study the formula: $Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V$.",
      "Understand what Queries, Keys, and Values conceptually represent (Information Retrieval).",
      "Write a standalone Python function using `numpy` or `torch` to calculate attention scores manually for 3 vectors.",
      "Verify that the softmax outputs sum to 1."
    ],
    "tools": ["Matrix Mathematics", "Attention Mechanism"],
    "deliverable": "A manual implementation of Self-Attention",
    "definitionOfDone": "You can mathematically prove how one word 'attends' to another in a sequence",
    "commonMistakes": ["Forgetting to scale by the square root of the dimension size (causes vanishing gradients in softmax)"],
    "resumeLine": "Deep mathematical and programmatic understanding of the Scaled Dot-Product Attention mechanisms powering modern LLMs",
    "connectsTo": "b8-d2"
  },
  "b8-d2": {
    "objective": "Expand Self-Attention into Multi-Head Attention blocks",
    "why": "A single attention head only looks for one type of relationship. Multi-head attention allows the model to simultaneously look at syntax, semantics, and context.",
    "steps": [
      "Understand the process of projecting inputs into multiple smaller Q, K, V spaces.",
      "Calculate attention independently for each 'head'.",
      "Concatenate the outputs of all heads back together.",
      "Pass the result through a final linear projection layer."
    ],
    "tools": ["Multi-Head Attention"],
    "deliverable": "A conceptual breakdown and code snippet of Multi-Head Attention",
    "definitionOfDone": "You can explain why 8 heads of dimension 64 is mathematically equivalent to 1 head of dimension 512, but functionally superior",
    "commonMistakes": ["Thinking Multi-Head Attention increases the parameter size (it usually splits the dimension, keeping parameters constant)"],
    "resumeLine": null,
    "connectsTo": "b8-d3"
  },
  "b8-d3": {
    "objective": "Assemble the complete Transformer Encoder architecture",
    "why": "The Transformer block is the fundamental Lego piece of AI. You must understand how residual connections and normalization prevent deep networks from collapsing.",
    "steps": [
      "Map out the Encoder block: Input -> Multi-Head Attention -> Add & Norm -> Feed Forward -> Add & Norm.",
      "Understand why Positional Encoding is required (Transformers have no inherent concept of sequence order).",
      "Trace a tensor's shape as it flows completely through one Encoder block."
    ],
    "tools": ["Transformer Architecture", "Positional Encoding"],
    "deliverable": "A deep understanding of the 'Attention Is All You Need' architecture",
    "definitionOfDone": "You can draw a complete Transformer Encoder block from memory",
    "commonMistakes": ["Confusing the Encoder (BERT) with the Decoder (GPT) architectures"],
    "resumeLine": null,
    "connectsTo": "b8-d4"
  },
  "b8-d4": {
    "objective": "Integrate the Hugging Face `transformers` ecosystem for enterprise NLP",
    "why": "Nobody writes Transformers from scratch in production. Hugging Face is the industry standard for loading, tokenizing, and utilizing state-of-the-art models.",
    "steps": [
      "Install the `transformers` library.",
      "Load the `bert-base-uncased` tokenizer and model.",
      "Tokenize a sample sentence, observing the `[CLS]` and `[SEP]` special tokens.",
      "Pass the tokens through the model and extract the pooled output of the `[CLS]` token."
    ],
    "tools": ["Hugging Face", "BERT"],
    "deliverable": "A working script that generates BERT embeddings for raw text",
    "definitionOfDone": "You can successfully extract the 768-dimensional context vector for any given sentence",
    "commonMistakes": ["Forgetting to pass the `attention_mask` to the model when batching padded sequences"],
    "resumeLine": "Leveraged the Hugging Face ecosystem to integrate state-of-the-art Transformer models (BERT) into production pipelines",
    "connectsTo": "b8-d5"
  },
  "b8-d5": {
    "objective": "Fine-tune a Pre-trained BERT model for custom classification",
    "why": "Pre-trained models know English, but they don't know your domain. Fine-tuning adapts their vast knowledge to your specific business problem with minimal data.",
    "steps": [
      "Load the IMDB dataset.",
      "Initialize `AutoModelForSequenceClassification` with 2 labels.",
      "Use the Hugging Face `Trainer` API or write a custom PyTorch training loop to fine-tune the model.",
      "Train for 3 epochs using a very small learning rate (e.g., 2e-5)."
    ],
    "tools": ["Fine-Tuning", "Hugging Face Trainer API"],
    "deliverable": "A Fine-Tuned BERT model capable of sentiment analysis",
    "definitionOfDone": "The model successfully trains and achieves >90% validation accuracy on the dataset",
    "commonMistakes": ["Using a high learning rate (e.g., 1e-3), which causes 'Catastrophic Forgetting' of the pre-trained weights"],
    "resumeLine": "Fine-tuned massive Transformer architectures (BERT) on custom datasets, achieving state-of-the-art classification accuracy",
    "connectsTo": "b8-d6"
  },
  "b8-d6": {
    "objective": "Benchmark the Transformer against legacy sequence models",
    "why": "Transformers are powerful but massive and slow. A Senior AI Engineer must know when to use a Transformer and when a simpler BiLSTM is sufficient.",
    "steps": [
      "Compare the final Fine-Tuned BERT accuracy against your Week 7 BiLSTM.",
      "Measure the inference time (latency) for a single prediction on both models.",
      "Compare the disk size of the saved models.",
      "Create a final recommendation document outlining the trade-offs."
    ],
    "tools": ["Benchmarking", "Latency Optimization"],
    "deliverable": "An architectural comparison report (BERT vs BiLSTM)",
    "definitionOfDone": "You can quantitatively justify whether the accuracy gain of BERT is worth the 10x increase in computational cost",
    "commonMistakes": ["Assuming Transformers are always the right answer for every problem"],
    "resumeLine": null,
    "connectsTo": "b8-d7"
  },
  "b8-d7": {
    "objective": "Solidify your AI identity through advanced technical communication",
    "why": "Fine-tuning BERT is a significant milestone. Publishing a deep-dive on Attention proves you are not just an API wrapper, but a true AI Engineer.",
    "steps": [
      "Draft a blog post: 'Understanding Attention: Why BERT beat my BiLSTM'.",
      "Include the math of the Attention mechanism in simple terms.",
      "Share your benchmark table (Accuracy vs Latency vs Size).",
      "Publish and share within the broader AI community."
    ],
    "tools": ["Blogging", "Technical Leadership"],
    "deliverable": "A flagship technical case study on Modern NLP architectures",
    "definitionOfDone": "Post is live, demonstrating a deep, principled understanding of the Attention Mechanism",
    "commonMistakes": ["Focusing on the code implementation rather than the *intuition* behind the architecture"],
    "resumeLine": null,
    "connectsTo": "Next Phase"
  }
};
