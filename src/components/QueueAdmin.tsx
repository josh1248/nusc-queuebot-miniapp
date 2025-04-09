
import React from "react";
import { useQueue } from "../contexts/QueueContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronRight, Shield } from "lucide-react";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";

export const QueueAdmin: React.FC = () => {
  const { nextInQueue, currentPosition, isAdmin, setIsAdmin } = useQueue();

  const handleNextInQueue = () => {
    nextInQueue();
  };

  return (
    <Card className={`glass-card ${isAdmin ? "border-primary/50" : ""}`}>
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-medium flex items-center gap-2">
            <Shield size={18} className={isAdmin ? "text-primary" : "text-muted-foreground"} />
            Queue Management
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Label htmlFor="admin-mode" className="text-sm">Admin</Label>
            <Switch
              id="admin-mode"
              checked={isAdmin}
              onCheckedChange={setIsAdmin}
            />
          </div>
        </div>
        <CardDescription>
          {isAdmin 
            ? "You have admin privileges to manage the queue" 
            : "Toggle admin mode to manage the queue"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isAdmin && (
          <div className="py-2">
            <div className="text-center">
              <p className="text-muted-foreground">Currently serving</p>
              <p className="text-4xl font-bold my-2 text-primary">#{currentPosition}</p>
              <p className="text-sm text-muted-foreground">Click below to call the next person</p>
            </div>
          </div>
        )}
      </CardContent>
      {isAdmin && (
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleNextInQueue}
          >
            Next in Queue
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
