"use client"

import { useState } from "react";
import { MessageSquare, Heart, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Story {
  id: string;
  content: string;
  date: string;
  likes: number;
  isLiked?: boolean;
}

const Stories = () => {
  const { toast } = useToast();
  const [newStory, setNewStory] = useState("");
  const [stories, setStories] = useState<Story[]>(() => {
    const saved = localStorage.getItem("stories");
    return saved ? JSON.parse(saved) : [
      {
        id: "1",
        content: "Through this community, I found the strength to start my healing journey. Remember, you are not alone.",
        date: "2024-02-20",
        likes: 5,
      },
      {
        id: "2",
        content: "Taking the first step to seek help was the hardest, but it was also the most important decision I've made.",
        date: "2024-02-19",
        likes: 3,
      }
    ];
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStory.trim()) {
      toast("Please share something", "error");
      return;
    }
    const story = {
      id: Date.now().toString(),
      content: newStory,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
    };
    const updatedStories = [story, ...stories];
    setStories(updatedStories);
    localStorage.setItem("stories", JSON.stringify(updatedStories));
    setNewStory("");
    toast("Story shared! Thank you for sharing your story", "success");
  };
  const handleLike = (id: string) => {
    const updatedStories = stories.map(story => {
      if (story.id === id) {
        return {
          ...story,
          likes: story.isLiked ? story.likes - 1 : story.likes + 1,
          isLiked: !story.isLiked,
        };
      }
      return story;
    });
    setStories(updatedStories);
    localStorage.setItem("stories", JSON.stringify(updatedStories));
  };
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Community Stories</h1>
        <p className="text-gray-600">
          Share your journey anonymously and connect with others who understand.
          Your story could help someone feel less alone.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="card">
        <textarea
          value={newStory}
          onChange={(e) => setNewStory(e.target.value)}
          className="input-field min-h-[120px] mb-4"
          placeholder="Share your story anonymously..."
        />
        <div className="flex justify-end">
          <button type="submit" className="button-primary">
            <Send className="inline-block mr-2 h-4 w-4" />
            Share Anonymously
          </button>
        </div>
      </form>
      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story.id} className="card">
            <p className="text-gray-800 mb-4">{story.content}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{story.date}</span>
              <button
                onClick={() => handleLike(story.id)}
                className={`flex items-center space-x-1 transition-colors ${
                  story.isLiked ? "text-primary" : "text-gray-500"
                } hover:text-primary`}
              >
                <Heart className="h-4 w-4" />
                <span>{story.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="card bg-secondary/50">
        <div className="flex items-start space-x-4">
          <MessageSquare className="h-6 w-6 text-primary flex-shrink-0" />
          <p className="text-gray-600">
            This is a safe space to share your experiences. All posts are anonymous.
            Please be respectful and supportive of others in our community.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Stories;